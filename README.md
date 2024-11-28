# String Calculator

This project implements a String Calculator following the Test-Driven Development (TDD) approach. The calculator can sum numbers provided in a string format with various delimiters and handles specific edge cases as described in the requirements.

## Features

- **Basic Addition**: Handles an empty string, single number, and two numbers separated by commas.
- **Multiple Numbers**: Supports an unknown amount of numbers.
- **New Line Delimiters**: Allows new lines as delimiters in addition to commas.
- **Custom Delimiters**: Supports custom single-character and multi-character delimiters.
- **Multiple Delimiters**: Allows multiple delimiters, including those with lengths longer than one character.
- **Negative Numbers**: Throws an error listing all negative numbers.
- **Ignore Large Numbers**: Ignores numbers greater than 1000.

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sobebarali/calculator-tdd
   cd calculator-tdd
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

The main functionality is provided by the `add` function in `add.ts`. You can import and use this function in your TypeScript code as follows:

```typescript
import { add } from './calculator/add';

const result = add("1,2,3");
console.log(result); // Outputs: 6
```

## Testing

This project uses [Vitest](https://vitest.dev/) for testing. To run the tests, use the following command:

```bash
npm test
```

The tests cover various scenarios, including basic functionality, delimiter handling, and error cases.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
