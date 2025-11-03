export const CUT_TYPE_X = 0;
export const CUT_TYPE_Y = 1;

export class LootItem {
  public name: string;
  public value: number;
  public width: number;
  public height: number;
  constructor(name: string, value: number, width: number, height: number) {
    this.name = name;
    this.value = value;
    this.width = width;
    this.height = height;
  }
}

export class Treasure {
  public lootItems: LootItem[];
  constructor(lootItems: LootItem[]) {
    this.lootItems = lootItems;
  }

  getBestLoot(width: number, height: number): LootItem | undefined {
    let best: LootItem | undefined;
    for (const li of this.lootItems) {
      if (li.width === width && li.height === height) {
        if (!best || li.value > best.value) best = li;
      }
    }
    return best;
  }
}

export interface PlacedLoot {
  item: LootItem;
  x: number;
  y: number;
}

export class RPGInventory {
  occupied: boolean[][];
  placed: PlacedLoot[] = [];
  totalValue = 0;
  width: number;
  height: number;
  constructor(
    width: number,
    height: number,
  ) {
    this.width = width;
    this.height = height;
    this.occupied = Array.from({ length: height }, () => Array(width).fill(false));
  }
  addLootItem(item: LootItem, x: number, y: number) {
    for (let dx = 0; dx < item.width; dx++) {
      for (let dy = 0; dy < item.height; dy++) {
        const xx = x + dx,
          yy = y + dy;
        if (xx >= this.width || yy >= this.height || this.occupied[yy][xx]) {
          throw new Error('Collision when adding item');
        }
      }
    }
    for (let dx = 0; dx < item.width; dx++) {
      for (let dy = 0; dy < item.height; dy++) {
        this.occupied[y + dy][x + dx] = true;
      }
    }
    this.placed.push({ item, x, y });
    this.totalValue += item.value;
  }
  addInventory(other: RPGInventory, offsetX: number, offsetY: number) {
    for (const p of other.placed) {
      this.addLootItem(p.item, offsetX + p.x, offsetY + p.y);
    }
  }
  describe(): string {
    return [
      ...this.placed.map((p) => ` - ${p.item.name} (${p.item.width}x${p.item.height}) @ (${p.x},${p.y}) : ${p.item.value}`),
      `Total value: ${this.totalValue}`,
    ].join('\n');
  }
}

function* iterOnRectCuttings(width: number, height: number): Generator<[[number, number], [number, number], number]> {
  for (let x = 1; x <= Math.floor(width / 2); x++) {
    yield [[x, height], [width - x, height], CUT_TYPE_X];
  }
  for (let y = 1; y <= Math.floor(height / 2); y++) {
    yield [[width, y], [width, height - y], CUT_TYPE_Y];
  }
}

function getNextRpgInventory(width: number, height: number, best: Map<string, RPGInventory>, treasure: Treasure): RPGInventory {
  const candidates: { value: number; data: any }[] = [];

  for (const [[w1, h1], [w2, h2], cutType] of iterOnRectCuttings(width, height)) {
    const inv1 = best.get(`${w1}x${h1}`)!;
    const inv2 = best.get(`${w2}x${h2}`)!;
    candidates.push({ value: inv1.totalValue + inv2.totalValue, data: { inv1, inv2, cutType } });
  }

  const direct = treasure.getBestLoot(width, height);
  if (direct) {
    const inv = new RPGInventory(width, height);
    inv.addLootItem(direct, 0, 0);
    candidates.push({ value: inv.totalValue, data: { single: inv } });
  }

  if (!candidates.length) return new RPGInventory(width, height);

  let bestCand = candidates[0];
  for (const c of candidates) if (c.value > bestCand.value) bestCand = c;

  if (bestCand.data.single) return bestCand.data.single;

  const { inv1, inv2, cutType } = bestCand.data;
  const merged = new RPGInventory(width, height);
  merged.addInventory(inv1, 0, 0);
  if (cutType === CUT_TYPE_X) merged.addInventory(inv2, inv1.width, 0);
  else merged.addInventory(inv2, 0, inv1.height);
  return merged;
}

export function getBestRpgInventory(width: number, height: number, treasure: Treasure): RPGInventory {
  const best = new Map<string, RPGInventory>();
  for (let w = 1; w <= width; w++) {
    for (let h = 1; h <= height; h++) {
      const inv = getNextRpgInventory(w, h, best, treasure);
      best.set(`${w}x${h}`, inv);
    }
  }
  return best.get(`${width}x${height}`)!;
}

// Example usage:
if (require.main === module) {
  const items = [
    new LootItem('Potion of Potionentiality', 30, 1, 1),
    new LootItem('Jeweled Dog Draught Excluder', 150, 3, 1),
    new LootItem('Spartan Shield', 300, 2, 2),
    new LootItem('Palindromic Sword o’Drows', 120, 1, 3),
    new LootItem('Unobsidian Armor', 540, 2, 3),
    new LootItem('Wardrobe of Infinite Lions', 1337, 20, 10),
  ];
  const treasure = new Treasure(items);
  const best5x4 = getBestRpgInventory(5, 4, treasure);
  console.log(best5x4.describe());
}
// Note: no item rotation; complexity ~ O(W*H*(W+H)).
