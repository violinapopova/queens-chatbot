# Queens ChatBot

Queens ChatBot is a React Native chatbot application using Expo.

## Prerequisites

- Node.js (v18 or higher)
- npm (v6 or higher) or yarn
- Expo CLI (`npm install -g expo-cli`)

## Getting Started

1. **Clone the repository:**

    ```sh
    git clone https://github.com/violinapopova/queens-chatbot.git
    cd queens-chat
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

    or

    ```sh
    yarn 
    ```

3. **Set up the API key:**

    - Open the [Constants.js](http://_vscodecontentref_/0) file.
    - Replace the empty string in [export const API_KEY = '';](http://_vscodecontentref_/1) with your API key from [AI Studio](https://aistudio.google.com/).

4. **Start the project:**

    ```sh
    npm start
    ```

    or

    ```sh
    yarn start
    ```

5. **Run on Android:**

    ```sh
    npm run android
    ```

    or

    ```sh
    yarn android
    ```

6. **Run on iOS:**

    ```sh
    npm run ios
    ```

    or

    ```sh
    yarn ios
    ```

7. **Run on Web:**

    ```sh
    npm run web
    ```

    or

    ```sh
    yarn web
    ```

## Project Structure

- [App.js](http://_vscodecontentref_/2): Entry point of the application.
- [ChatBot.js](http://_vscodecontentref_/3): Main chatbot component.
- [ChatItem.js](http://_vscodecontentref_/4): Component for individual chat items.
- [Constants.js](http://_vscodecontentref_/5): Contains the API key.
- [assets](http://_vscodecontentref_/6): Contains images and other assets.

## Dependencies

- [axios](http://_vscodecontentref_/7): Promise-based HTTP client for making API requests.
- `expo`: Framework and platform for universal React applications.
- `expo-speech`: Expo module for text-to-speech functionality.
- `expo-status-bar`: Expo module for controlling the status bar.
- `react`: JavaScript library for building user interfaces.
- `react-native`: Framework for building native apps using React.
- `react-native-vector-icons`: Customizable icons for React Native.

## License

This project is licensed under the MIT License.