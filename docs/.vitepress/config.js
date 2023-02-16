// import { getSideBar } from 'vitepress-plugin-autobar'
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "开发者工具文档",
  description: "Devtools Doc",

  outDir: '../dist',

  themeConfig: {
    logo: "/logo.png",
    // sidebar: getSideBar('./docs')
    sidebar: [
      {
        text: 'Overview',
        link: '/00-test'
      },
      {
        text: 'Open Chrome DevTools',
        link: '/01-test'
      },
      {
        text: 'What\'s New in DevTools',
        link: '/02-test'
      },
      {
        text: 'DevTools tips',
        link: '/03-test'
      },
      {
        text: "Commands and shortcuts",
        items: [
          {
            text: "run commands in the command menu",
            link: "/guide/05-when-writing-tests"
          },
          {
            text: 'Disable JavaScript',
            link: "/Disable-JavaScript"
          },
          {
            text: 'Keyboard shortcuts',
            link: '/Keyboard-shortcuts'
          }
        ]
      },
      {
        text: 'Elements',
        items: [
          {
            text: 'DOM',
            items: [
              {
                text: 'Get started with viewing and changing the DOM',
                link: '/get-started-with-viewing-and-changing-the-DOM'
              },
              {
                text: 'View the properties of DOM objects',
                link: '/View-the-properties-of-DOM-objects'
              },
              {
                text: 'Badges reference',
                link: '/Badge-reference'
              }
            ]
          },
          {
            text: 'CSS',
            items: [
              {
                text: 'View and change CSS',
                link: '/view-and-change'
              },
              {
                text: 'Find invalid, overridden, inactive, and other CSS',
                link: '/find-invalid-change'
              },
              {
                text: 'Inspect CSS grid layouts',
                link: '/inspect'
              },
              {
                text: 'Inspect and debug CSS flexbox layouts',
                link: '/inspect flexbox'
              },
              {
                text: 'Inspect and debug CSS container queries',
                link: '/inspect container'
              },
              {
                text: 'CSS features reference',
                link: 'css features reference'
              }
            ]
          }
        ]
      },
      {
        text: 'Console',
        items: [
          {
            text: 'Console overview',
            link: '/console'
          },
          {
            text: 'Log messages in the Console',
            link: '/log'
          },
          {
            text: 'Run JavaScript in the Console',
            link: '/run'
          },
          {
            text: 'Watch JavaScript values in real-time with Live Expressions',
            link: '/watch'
          },
          {
            text: 'Format and style messages in the Console',
            link: '/format'
          },
          {
            text: 'Console features reference',
            link: '/console-features'
          },
          {
            text: 'Console API reference',
            link: '/console-api'
          },
          {
            text: 'Console Utilities API reference',
            link: '/console-utilities-api'
          }
        ]
      },
      {
        text: 'Sources',
        items: [
          {
            text: 'Sources panel overview',
            link: 'test'
          },
          {
            text: 'Debug JavaScript',
            link: 'test'
          },
          {
            text: 'Pause your code with breakpoints',
            link: 'test'
          },
          {
            text: 'Run snippets of JavaScript',
            link: 'test'
          },
          {
            text: 'Edit and save files with Workspaces',
            link: 'test'
          },
          {
            text: 'JavaScript debugging reference',
            link: 'test'
          }
        ]
      },
      {
        text: 'Network',
        items: [
          {
            text: 'Inspect network activity',
            link: 'test'
          },
          {
            text: 'Network features reference',
            link: 'test'
          },
          {
            text: 'View page resource',
            link: 'test'
          }
        ]
      },
      {
        text: 'Performance',
        items: [
          {
            text: 'Analyze runtime performance',
            link: 'test'
          },
          {
            text: 'Performance features reference',
            link: 'test'
          },
          {
            text: 'Timeline event reference',
            link: 'test'
          }
        ]
      },
      {
        text: 'Performance insights: Get actionable insights on your website\'s performance',
        link: 'test'
      },
      {
        text: 'Memory',
        items: [
          {
            text: 'Memory terminology',
            link: 'test'
          },
          {
            text: 'Fix memory problems',
            link: 'test'
          },
          {
            text: 'Record heap snapshots',
            link: 'test'
          },
          {
            text: 'How to Use the Allocation Profiler Tool',
            link: 'test'
          }
        ]
      },
      {
        text: 'Application',
        items: [
          {
            text: 'Animations: Inspect and modify CSS animation effects',
            link: 'test'
          },
          {
            text: 'Changes: Track your HTML, CSS, and JavaScript changes',
            link: 'test'
          },
          {
            text: 'Coverage: Find unused JavaScript and CSS',
            link: 'test'
          },
          {
            text: 'CSS Overview: Identity potential CSS improvements',
            link: 'test'
          },
          {
            text: 'Issues: Find and fix problems',
            link: 'test'
          },
          {
            text: 'Media: View and debug media players information',
            link: 'test'
          },
          {
            text: 'Memory Inspector: Inspect ArrayBuffer, TypedArray, DataView, and Wasm Memory',
            link: 'test'
          },
          {
            text: 'Network conditions: Override the user agent string'
          }
        ]
      },
      {
        text: 'Recorder',
        items: [
          {
            text: 'Record, replay, and measure user flows',
            link: 'test'
          },
          {
            text: 'Recorder features reference',
            link: 'test'
          }
        ]
      },
      {
        text: 'Rendering',
        items: [
          {
            text: 'Rendering tab overview',
            link: 'test'
          },
          {
            text: 'Discover issues with rendering performance',
            link: 'test'
          },
          {
            text: 'Emulate CSS media features',
            link: 'test'
          },
          {
            text: 'Apply other effects: enable automatic dark theme, emulate focus, and more',
            link: 'test'
          }
        ]
      },
      {
        text: 'Security: Understand security issues',
        link: 'test'
      },
      {
        text: 'Search: Find text across all loaded resources',
        link: 'test'
      },
      {
        text: 'Sensors: Emulate device sensors',
        link: 'test'
      },
      {
        text: 'WebAuthn: Emulate authenticators',
        link: 'test'
      },
      {
        text: 'Remote debugging',
        items: [
          {
            text: 'Remote debug Android devices',
            link: 'test'
          },
          {
            text: 'Access local servers',
            link: 'test'
          },
          {
            text: 'Remote debugging WebViews',
            link: 'test'
          }
        ]
      },
      {
        text: 'Accessibility',
        items: [
          {
            text: 'Accessibility features reference',
            link: 'test'
          },
          {
            text: 'Make your website more readable',
            link: 'test'
          },
          {
            text: 'Navigate Chrome DevTools with assistive technology',
            link: 'test'
          },
          {
            text: 'Track element focus',
            link: 'test'
          }
        ]
      },
      {
        text: 'Settings and customization',
        items: [
          {
            text: 'Customize',
            link: 'test'
          },
          {
            text: 'Enable dark theme',
            link: 'test'
          },
          {
            text: 'Change placement: undock, dock to bottom, dock to left',
            link: 'test'
          },
          {
            text: 'Ignore Chrome Extension Scripts',
            link: 'test'
          }
        ]
      },
      {
        text: 'Engineering blog',
        link: 'test'
      }
    ]
  },
});
