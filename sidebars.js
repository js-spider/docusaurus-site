/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  DemoSidebar: [{ type: "autogenerated", dirName: "1-demo" }],
  brokerSidebar: [{ type: "autogenerated", dirName: "broker" }],
  contractSidebar: [{ type: "autogenerated", dirName: "contract" }],
  marginSidebar: [{ type: "autogenerated", dirName: "margin" }],
  spotSidebar: [{ type: "autogenerated", dirName: "spot" }],
  tradingSidebar: [{ type: "autogenerated", dirName: "trading" }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
