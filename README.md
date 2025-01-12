# EmailProvider.js

**EmailProvider.js** is a lightweight JavaScript library for providing autocomplete suggestions for email input fields. This library enhances user experience by suggesting popular email domains as users type.

---

## Features

- Autocomplete suggestions for email domains.
- Configurable list of email domains.
- Easy integration with custom input classes.
- Lightweight and dependency-free.
- Minified version available for production use.

---

## Installation

### Manual Installation
1. Download the `EmailProvider.js` and `email-provider.min.js` files from the `dist/` directory.
2. Include the script in your HTML file:
   ```html
   <!-- Minified version for production -->
   <script src="dist/email-provider.min.js"></script>

   <!-- Non-minified version for development -->
   <script src="dist/email-provider.js"></script>
   ```

---

## Usage

1. Add an input field in your HTML with a specific class (default: `email-provider`):
   ```html
   <input type="email" class="email-provider" placeholder="Enter your email">
   ```

2. Initialize the library in your JavaScript code:
   ```javascript
   new EmailProvider({
       inputClass: 'email-provider', // Replace with your desired class name
       emailProviders: ["example.com", "test.com"] // Add additional email providers
   });
   ```

---

## Customization

### Options

| Option          | Type       | Default                | Description                                      |
|-----------------|------------|------------------------|--------------------------------------------------|
| `inputClass`    | `string`   | `'email-provider'`     | CSS class of the input field to target.          |
| `emailProviders`| `array`    | `["gmail.com", "yahoo.com", "outlook.com", "icloud.com", "hotmail.com"]` | Additional email domains to suggest.            |

---

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EmailProvider Demo</title>
    <script src="dist/email-provider.min.js"></script>
</head>
<body>
    <div>
        <input type="email" class="email-provider" placeholder="Enter your email">
    </div>

    <script>
        new EmailProvider({
            inputClass: 'email-provider',
            emailProviders: ["example.com", "test.com"]
        });
    </script>
</body>
</html>
```

---

## How It Works

1. Wraps the email input field and suggestion dropdown in a `div` for better control.
2. Tracks input field changes and displays suggestions in real-time.
3. Allows users to click on a suggestion to autocomplete the input.
4. Hides the suggestion list when the input loses focus.

---

## Minified Version

The minified version of the library is optimized for production environments. It has a smaller file size and faster loading times. Use the `email-provider.min.js` file in production:

```html
<script src="dist/email-provider.min.js"></script>
```

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

