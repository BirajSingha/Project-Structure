React Native Project

This is a new React Native project, bootstrapped using @react-native-community/cli.

Project Folder Structure

src →
  - assets →
      - fonts       # Custom fonts
      - icons       # Static icons (SVG or images)
      - images      # App images (logos, banners, etc.)
      - json        # Static JSON data
  - components →
      - common      # Reusable components (e.g., Button, TextInput)
      - specific    # Feature-specific components
      - template    # Layout templates for reuse
      - ui          # Basic UI components (e.g., Card, Modal)
  - navigation      # All navigation files (e.g., StackNavigator, RootNavigator)
  - screens →
      - protected → # Screens accessible only to authenticated users
          - home
          - notifications
          - resources
          - settings
      - public → # Screens accessible to all users
          - auth      # Login, signup, forgot password
          - cms       # Static content like privacy policy, terms
  - store →
      - service      # API call functions (e.g., login, signup)
      - slice        # State management with Redux Toolkit
  - themes          # Define fonts, colors, icons, images
  - types           # Common and global TypeScript types
  - utils →
      - helpers      # Helper functions
      - orientation  # Screen orientation handling
      - server       # Axios instance for API calls
      - storage      # Local storage logic (using react-native-mmkv)
- .env                # Environment variables (e.g., API base URL)
- env.d               # Type definitions for .env variables
- react-native.config.js # React Native CLI configurations
- tsconfig.json       # TypeScript configuration

Project Workflow Diagram

Start Project -
   - ↳ Load App
      - ↳ Assets (images/icons)
      - ↳ Navigation (stack/tab navigation)
      - ↳ Screens (public/auth or protected)
      - ↳ Components (common templates and UIs)
      - ↳ Store (state management)
      - ↳ Utils (helpers, APIs, storage)
   - ↳ Run Metro bundler
      - ↳ Build and debug (Android/iOS)

Getting Started

Note: Make sure you have completed the Set Up Your Environment guide before proceeding.

Step 1: Start Metro

First, you will need to run Metro, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

# Using npm
npm start

# OR using Yarn
yarn start

Step 2: Build and Run Your App

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

Android

# Using npm
npm run android

# OR using Yarn
yarn android

iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

bundle install

Then, and every time you update your native dependencies, run:

bundle exec pod install

For more information, please visit CocoaPods Getting Started guide.

# Using npm
npm run ios

# OR using Yarn
yarn ios

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

Step 3: Modify Your App

Now that you have successfully run the app, let's make changes!

Open App.tsx in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by Fast Refresh.

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

Android: Press the R key twice or select "Reload" from the Dev Menu, accessed via Ctrl + M (Windows/Linux) or Cmd ⌘ + M (macOS).

iOS: Press R in iOS Simulator.

Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

Now what?

If you want to add this new React Native code to an existing application, check out the Integration guide.

If you're curious to learn more about React Native, check out the docs.

Troubleshooting

If you're having issues getting the above steps to work, see the Troubleshooting page.

Learn More

To learn more about React Native, take a look at the following resources:

React Native Website - learn more about React Native.

Getting Started - an overview of React Native and how setup your environment.

Learn the Basics - a guided tour of the React Native basics.

Blog - read the latest official React Native Blog posts.

@facebook/react-native - the Open Source; GitHub repository for React Native.
