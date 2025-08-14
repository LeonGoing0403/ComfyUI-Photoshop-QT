import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-terminal {\n    height: ".concat(dt('terminal.height'), ";\n    overflow: auto;\n    background: ").concat(dt('terminal.background'), ";\n    color: ").concat(dt('terminal.color'), ";\n    border: 1px solid ").concat(dt('terminal.border.color'), ";\n    padding: ").concat(dt('terminal.padding'), ";\n    border-radius: ").concat(dt('terminal.border.radius'), ";\n}\n\n.p-terminal-prompt {\n    display: flex;\n    align-items: center;\n}\n\n.p-terminal-prompt-value {\n    flex: 1 1 auto;\n    border: 0 none;\n    background: transparent;\n    color: inherit;\n    padding: 0;\n    outline: 0 none;\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-size: 1rem;\n}\n\n.p-terminal-prompt-label {\n    margin-inline-end: ").concat(dt('terminal.prompt.gap'), ";\n}\n\n.p-terminal-input::-ms-clear {\n    display: none;\n}\n\n.p-terminal-command-response {\n    margin: ").concat(dt('terminal.command.response.margin'), ";\n}\n");
};
var classes = {
  root: 'p-terminal p-component',
  welcomeMessage: 'p-terminal-welcome-message',
  commandList: 'p-terminal-command-list',
  command: 'p-terminal-command',
  commandValue: 'p-terminal-command-value',
  commandResponse: 'p-terminal-command-response',
  prompt: 'p-terminal-prompt',
  promptLabel: 'p-terminal-prompt-label',
  promptValue: 'p-terminal-prompt-value'
};
var TerminalStyle = BaseStyle.extend({
  name: 'terminal',
  theme: theme,
  classes: classes
});

export { TerminalStyle as default };
//# sourceMappingURL=index.mjs.map
