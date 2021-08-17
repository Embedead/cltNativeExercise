import React from "react";
import {WebView} from "react-native-webview"

export const WebViewComp = ({route}) => {
  const {uri} = route.params;
  return(
    <WebView source={{uri: uri}}/>
  )
}