import { render, screen } from '@testing-library/react'

describe("test", () => {
    it("should pass", () => {
        render(<button>AAAAA</button>);

        expect(screen.getByRole('button', { name: 'AAAAA'})).toBeInTheDocument()
    });
})