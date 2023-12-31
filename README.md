# QR Code Generator Extention

This project is a QR code generator Chrome extension built using Solidjs. It's a light weight project that I put together while exploring the process of building Chrome extensions.

**Note**: A `dist.crx` file is already generated and ready to go in case you would like to install the extension without having to build it yourself.

## Getting Started

In order to load this extension you will have to build the project using the following command:

```bash
npm install && npm run build
```

Once you've built the project you'll need to add a manifest.json file with a structure that looks like this:

```json
{
  "name": "QR Code Generator",
  "version": "1.0",
  "description": "A generic QR code generator",
  "permissions": ["activeTab"],
  "browser_action": {
    "default_popup": "index.html"
  },
  "manifest_version": 2
}
```

Next you'll open up Chrome or any Chromium based browser and go to manage extensions at `BROWSER_NAME://extensions` e.g `arc://extensions`.

Click the "Load Unpacked" button then navigate to the dist directory that was generated by the earlier build command and select it.

In order to pack the extension into a `.crx` file you'll need to click on the "Pack Extension" button and follow the prompts provided. You don't need to worry about a private key since you're not updating an already packed extension but packing an entirely new one.

Once you've packed your extension 2 files should be generated in the project's folder, namely dist.crx and dist.pem. The `.crx` file being the packed Chrome extension and the `.pem` file being the private key needed to update the `.crx` extension.
