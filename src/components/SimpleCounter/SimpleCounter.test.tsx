import {describe, it, expect} from "vitest";
import { render, screen, act } from "@testing-library/react";
import SimpleCounter from "./SimpleCounter.tsx";


describe('Button counter test', () => {
    it('should render ButtonCounter component', () => {
        render(<SimpleCounter />)
        expect(screen.getByText('Count: 0')).toBeInTheDocument();
    })

    it('should increment count on button click', async () => {
        render(<SimpleCounter />)
        const button = screen.getByText(/Count:/i);
        act(()=> {
            button.click();
        })

        expect(screen.getByText('Count: 1')).toBeInTheDocument();
    })
})