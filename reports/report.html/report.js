$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/BbcLogin.feature");
formatter.feature({
  "name": "Login",
  "description": "  As a BBC user I want to utilise the login feature\n  so that I can use the customisation features",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "I receive a valid error when using an incorrect password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am on the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "BbcLoginStepDefs.i_am_on_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input a valid email",
  "keyword": "When "
});
formatter.match({
  "location": "BbcLoginStepDefs.i_input_a_valid_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an invalid password",
  "keyword": "And "
});
formatter.match({
  "location": "BbcLoginStepDefs.an_invalid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive a valid error",
  "keyword": "Then "
});
formatter.match({
  "location": "BbcLoginStepDefs.i_receive_a_valid_error()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#form\\-message\\-password\"}\n  (Session info: chrome\u003d78.0.3904.97)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00274.0.0-alpha-3\u0027, revision: \u00278c567de6dc\u0027\nSystem info: host: \u0027LT-LON-W100\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.97, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\EDWARD~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63467}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 3edafc4a082a29ddfe62412a464aac0f\n*** Element info: {Using\u003did, value\u003dform-message-password}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:191)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:125)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:576)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:196)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat com.spartaglobal.selenium_example.pages.BbcSignInPage.getPasswordErrorMessageText(BbcSignInPage.java:27)\r\n\tat com.spartaglobal.stepdefs.BbcLoginStepDefs.i_receive_a_valid_error(BbcLoginStepDefs.java:39)\r\n\tat ✽.I receive a valid error(classpath:features/BbcLogin.feature:9)\r\n",
  "status": "failed"
});
});