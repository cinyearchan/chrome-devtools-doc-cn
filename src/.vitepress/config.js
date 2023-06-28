// import { getSideBar } from 'vitepress-plugin-autobar'
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "开发者工具文档",
  description: "Devtools Doc",

  outDir: '../docs',
  base: '/chrome-devtools-doc-cn/',

  themeConfig: {
    logo: "/logo.png",
    // sidebar: getSideBar('./docs')
    sidebar: [
      {
        text: 'Overview',
        link: '/00-guide/01-overview'
      },
      {
        text: 'Open Chrome DevTools',
        link: '/00-guide/02-open-chrome-devtools'
      },
      {
        text: 'What\'s New in DevTools',
        link: '/00-guide/03-whats-new-in-devtools'
      },
      {
        text: 'DevTools tips',
        link: 'https://developer.chrome.com/tags/devtools-tips/'
      },
      {
        text: "Commands and shortcuts",
        collapsed: true,
        items: [
          {
            text: "run commands in the command menu",
            link: "/01-commands-and-shortcuts/01-run-commands-in-the-command-menu"
          },
          {
            text: 'Disable JavaScript',
            link: "/01-commands-and-shortcuts/02-disable-javascript"
          },
          {
            text: 'Keyboard shortcuts',
            link: '/01-commands-and-shortcuts/03-keyboard-shortcuts'
          }
        ]
      },
      {
        text: 'Simulate mobile devices with Device Mode',
        link: '/02-simulate/01-simulate-mobile-devices-with-device-mode'
      },
      {
        text: 'Elements',
        collapsed: true,
        items: [
          {
            text: 'DOM',
            collapsed: true,
            items: [
              {
                text: 'Get started with viewing and changing the DOM',
                link: '/03-elements/dom/01-get-started-with-viewing-and-changing-the-dom'
              },
              {
                text: 'View the properties of DOM objects',
                link: '/03-elements/dom/02-view-the-properties-of-dom-objects'
              },
              {
                text: 'Badges reference',
                link: '/03-elements/dom/03-badges-reference'
              }
            ]
          },
          {
            text: 'CSS',
            collapsed: true,
            items: [
              {
                text: 'View and change CSS',
                link: '/03-elements/css/01-view-and-change-css'
              },
              {
                text: 'Find invalid, overridden, inactive, and other CSS',
                link: '/03-elements/css/02-find-invalid-overridden-inactive-and-other-css'
              },
              {
                text: 'Inspect and debug HD and non-HD colors with the Color Picker',
                link: '/03-elements/css/03-inspect-and-debug-hd-and-non-hd-colors-with-the-color-picker'
              },
              {
                text: 'Inspect CSS grid layouts',
                link: '/03-elements/css/04-inspect-css-grid-layouts'
              },
              {
                text: 'Inspect and debug CSS flexbox layouts',
                link: '/03-elements/css/05-inspect-and-debug-css-flexbox-layouts'
              },
              {
                text: 'Inspect and debug CSS container queries',
                link: '/03-elements/css/06-inspect-and-debug-css-container-queries'
              },
              {
                text: 'CSS features reference',
                link: '/03-elements/css/07-css-features-reference'
              }
            ]
          }
        ]
      },
      {
        text: 'Console',
        collapsed: true,
        items: [
          {
            text: 'Console overview',
            link: '/04-console/01-console-overview'
          },
          {
            text: 'Log messages in the Console',
            link: '/04-console/02-log-messages-in-the-console'
          },
          {
            text: 'Run JavaScript in the Console',
            link: '/04-console/03-run-javascript-in-the-console'
          },
          {
            text: 'Watch JavaScript values in real-time with Live Expressions',
            link: '/04-console/04-watch-javascript-values-in-realtime-with-live-expressions'
          },
          {
            text: 'Format and style messages in the Console',
            link: '/04-console/05-format-and-style-messages-in-the-console'
          },
          {
            text: 'Console features reference',
            link: '/04-console/06-console-features-reference'
          },
          {
            text: 'Console API reference',
            link: '/04-console/07-console-api-reference'
          },
          {
            text: 'Console Utilities API reference',
            link: '/04-console/08-console-utilities-api-reference'
          }
        ]
      },
      {
        text: 'Sources',
        collapsed: true,
        items: [
          {
            text: 'Sources panel overview',
            link: '/05-sources/01-sources-panel-overview'
          },
          {
            text: 'Debug JavaScript',
            link: '/05-sources/02-debug-javascript'
          },
          {
            text: 'Pause your code with breakpoints',
            link: '/05-sources/03-pause-your-code-with-breakpoints'
          },
          {
            text: 'Run snippets of JavaScript',
            link: '/05-sources/04-run-snippets-of-javascript'
          },
          {
            text: 'Debug your original code instead of deployed with source maps',
            link: '/05-sources/05-debug-your-original-code-instead-of-deployed-with-source-maps'
          },
          {
            text: 'Edit and save files with Workspaces',
            link: '/05-sources/06-edit-and-save-files-with-workspaces'
          },
          {
            text: 'Override files and HTTP response headers locally',
            link: '/05-sources/07-override-files-and-http-response-headers-locally'
          },
          {
            text: 'JavaScript debugging reference',
            link: '/05-sources/08-javascript-debugging-reference'
          },
          {
            text: 'Debug C/C++ WebAssembly',
            link: '/05-sources/09-debug-c-c++-webassembly'
          }
        ]
      },
      {
        text: 'Network',
        collapsed: true,
        items: [
          {
            text: 'Inspect network activity',
            link: '/06-network/01-inspect-network-activity'
          },
          {
            text: 'Network features reference',
            link: '/06-network/02-network-features-reference'
          },
          {
            text: 'View page resource',
            link: '/06-network/03-view-page-resources'
          }
        ]
      },
      {
        text: 'Performance',
        collapsed: true,
        items: [
          {
            text: 'Analyze runtime performance',
            link: '/07-performance/01-analyze-runtime-performance'
          },
          {
            text: 'Performance features reference',
            link: '/07-performance/02-performance-features-reference'
          },
          {
            text: 'Timeline event reference',
            link: '/07-performance/03-timeline-event-reference'
          }
        ]
      },
      {
        text: 'Performance insights: Get actionable insights on your website\'s performance',
        link: '/07-performance/04-performance-insights-get-actionable-insights-on-your-websites-performance'
      },
      {
        text: 'Lighthouse: Optimize website speed',
        link: '/08-lighthouse/01-lighthouse-optimize-website-speed'
      },
      {
        text: 'Memory',
        collapsed: true,
        items: [
          {
            text: 'Memory terminology',
            link: '/09-memory/01-memory-terminology'
          },
          {
            text: 'Fix memory problems',
            link: '/09-memory/02-fix-memory-problems'
          },
          {
            text: 'Record heap snapshots',
            link: '/09-memory/03-record-heap-snapshots'
          },
          {
            text: 'How to Use the Allocation Profiler Tool',
            link: '/09-memory/04-how-to-use-the-allocation-profiler-tool'
          }
        ]
      },
      {
        text: 'Application',
        collapsed: true,
        items: [
          {
            text: 'Debug Progressive Web Apps',
            link: '/10-application/01-debug-progressive-web-apps'
          },
          {
            text: 'View and edit local storage',
            link: '/10-application/02-view-and-edit-local-storage'
          },
          {
            text: 'View and edit session storage',
            link: '/10-application/03-view-and-edit-session-storage'
          },
          {
            text: 'View and change IndexedDB data',
            link: '/10-application/04-view-and-change-indexeddb-data'
          },
          {
            text: 'View Web SQL data',
            link: '/10-application/05-view-web-sql-data'
          },
          {
            text: 'View, add, edit, and delete cookies',
            link: '/10-application/06-view-add-edit-and-delete-cookies'
          },
          {
            text: 'View cache data',
            link: '/10-application/07-view-cache-data'
          },
          {
            text: 'Test back/forward cache',
            link: '/10-application/08-test-back-forward-cache'
          },
          {
            text: 'Debug background services',
            link: '/10-application/09-debug-background-services'
          },
          {
            text: 'Deprecated: View Application Cache Data With Chrome DevTools',
            link: '/10-application/10-deprecated-view-application-cache-data-with-chrome-devtools'
          }
        ]
      },
      {
        text: 'Animations: Inspect and modify CSS animation effects',
        link: '/11-inspect-and-track/01-animations-inspect-and-modify-css-animation-effects'
      },
      {
        text: 'Changes: Track your HTML, CSS, and JavaScript changes',
        link: '/11-inspect-and-track/02-changes-track-your-html-css-and-javascript-changes'
      },
      {
        text: 'Coverage: Find unused JavaScript and CSS',
        link: '/11-inspect-and-track/03-coverage-find-unused-javascript-and-css'
      },
      {
        text: 'Developer Resources: View and manually load source maps',
        link: '/11-inspect-and-track/04-developer-resources-view-and-manually-load-source-maps'
      },
      {
        text: 'CSS Overview: Identity potential CSS improvements',
        link: '/11-inspect-and-track/05-css-overview-identify-potential-css-improvements'
      },
      {
        text: 'Issues: Find and fix problems',
        link: '/11-inspect-and-track/06-issues-find-and-fix-problems'
      },
      {
        text: 'Media: View and debug media players information',
        link: '/11-inspect-and-track/07-media-view-and-debug-media-players-information'
      },
      {
        text: 'Memory Inspector: Inspect ArrayBuffer, TypedArray, DataView, and Wasm Memory',
        link: '/11-inspect-and-track/08-memory-inspector-inspect-arraybuffer-typedarray-dataview-and-wasm-memory'
      },
      {
        text: 'Network conditions: Override the user agent string',
        link: '/11-inspect-and-track/09-network-conditions-override-the-user-agent-string'
      },
      {
        text: 'Recorder',
        collapsed: true,
        items: [
          {
            text: 'Record, replay, and measure user flows',
            link: '/12-recorder/01-record-replay-and-measure-user-flows'
          },
          {
            text: 'Features reference',
            link: '/12-recorder/02-features-reference'
          },
          {
            text: 'Customize the Recorder with extensions',
            link: '/12-recorder/03-customize-the-recorder-with-extensions'
          }
        ]
      },
      {
        text: 'Rendering',
        collapsed: true,
        items: [
          {
            text: 'Rendering tab overview',
            link: '/13-rendering/01-rendering-tab-overview'
          },
          {
            text: 'Discover issues with rendering performance',
            link: '/13-rendering/02-discover-issues-with-rendering-performance'
          },
          {
            text: 'Emulate CSS media features',
            link: '/13-rendering/03-emulate-css-media-features'
          },
          {
            text: 'Apply other effects: enable automatic dark theme, emulate focus, and more',
            link: '/13-rendering/04-apply-other-effects-enable-automatic-dark-theme-emulate-focus-and-more'
          }
        ]
      },
      {
        text: 'Security: Understand security issues',
        link: '/14-security/01-security-understand-security-issues'
      },
      {
        text: 'Search: Find text across all loaded resources',
        link: '/14-security/02-search-find-text-across-all-loaded-resources'
      },
      {
        text: 'Sensors: Emulate device sensors',
        link: '/14-security/03-sensors-emulate-device-sensors'
      },
      {
        text: 'WebAuth: Emulate authenticators',
        link: '/14-security/04-webauth-emulate-authenticators'
      },
      {
        text: 'Remote debugging',
        collapsed: true,
        items: [
          {
            text: 'Remote debug Android devices',
            link: '/15-remote-debugging/01-remote-debug-android-devices'
          },
          {
            text: 'Access local servers',
            link: '/15-remote-debugging/02-access-local-servers'
          },
          {
            text: 'Remote debugging WebViews',
            link: '/15-remote-debugging/03-remote-debugging-webviews'
          }
        ]
      },
      {
        text: 'Accessibility',
        collapsed: true,
        items: [
          {
            text: 'Accessibility features reference',
            link: '/16-accessibility/01-accessibility-features-reference'
          },
          {
            text: 'Make your website more readable',
            link: '/16-accessibility/02-make-your-website-more-readable'
          },
          {
            text: 'Navigate Chrome DevTools with assistive technology',
            link: '/16-accessibility/03-navigate-chrome-devtools-with-assistive-technology'
          },
          {
            text: 'Track element focus',
            link: '/16-accessibility/04-track-element-focus'
          }
        ]
      },
      {
        text: 'Customize DevTools',
        link: '/17-customize/01-customize-devtools'
      },
      {
        text: 'Settings reference',
        collapsed: true,
        items: [
          {
            text: 'Settings overview',
            link: '/18-settings-reference/01-settings-overview'
          },
          {
            text: 'Preferences',
            link: '/18-settings-reference/02-preferences'
          },
          {
            text: 'Workspace',
            link: '/18-settings-reference/03-workspace'
          },
          {
            text: 'Experiments',
            link: '/18-settings-reference/04-experiments'
          },
          {
            text: 'Ignore List',
            link: '/18-settings-reference/05-ignore-list'
          },
          {
            text: 'Devices',
            link: '/18-settings-reference/06-devices'
          },
          {
            text: 'Throttling',
            link: '/18-settings-reference/07-throttling'
          },
          {
            text: 'Locations',
            link: '/18-settings-reference/08-locations'
          },
          {
            text: 'Shortcuts',
            link: '/18-settings-reference/09-shortcuts'
          }
        ]
      },
      {
        text: 'Engineering blog',
        link: 'https://developer.chrome.com/tags/devtools-engineering/'
      }
    ]
  },
});
