import React from 'react';
import { AppRegistry } from 'react-native';

import AppContainer from './appContainer';
import { name as appName } from '../app.json';

// ===========================================
// CONFIG FOR MAKING NETWORK REQUEST SHOW UP
// ON DEBUGGER
// ===========================================
// GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
// GLOBAL.FormData = GLOBAL.originalFormData || GLOBAL.FormData;
// ===========================================


const RNFirebaseApp = () => (
        <AppContainer />
);

AppRegistry.registerComponent(appName, () => RNFirebaseApp);
