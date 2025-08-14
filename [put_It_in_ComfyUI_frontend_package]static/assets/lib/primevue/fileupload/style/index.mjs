import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-fileupload input[type=\"file\"] {\n    display: none;\n}\n\n.p-fileupload-advanced {\n    border: 1px solid ".concat(dt('fileupload.border.color'), ";\n    border-radius: ").concat(dt('fileupload.border.radius'), ";\n    background: ").concat(dt('fileupload.background'), ";\n    color: ").concat(dt('fileupload.color'), ";\n}\n\n.p-fileupload-header {\n    display: flex;\n    align-items: center;\n    padding: ").concat(dt('fileupload.header.padding'), ";\n    background: ").concat(dt('fileupload.header.background'), ";\n    color: ").concat(dt('fileupload.header.color'), ";\n    border-style: solid;\n    border-width: ").concat(dt('fileupload.header.border.width'), ";\n    border-color: ").concat(dt('fileupload.header.border.color'), ";\n    border-radius: ").concat(dt('fileupload.header.border.radius'), ";\n    gap: ").concat(dt('fileupload.header.gap'), ";\n}\n\n.p-fileupload-content {\n    border: 1px solid transparent;\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt('fileupload.content.gap'), ";\n    transition: border-color ").concat(dt('fileupload.transition.duration'), ";\n    padding: ").concat(dt('fileupload.content.padding'), ";\n}\n\n.p-fileupload-content .p-progressbar {\n    width: 100%;\n    height: ").concat(dt('fileupload.progressbar.height'), ";\n}\n\n.p-fileupload-file-list {\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt('fileupload.filelist.gap'), ";\n}\n\n.p-fileupload-file {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: ").concat(dt('fileupload.file.padding'), ";\n    border-block-end: 1px solid ").concat(dt('fileupload.file.border.color'), ";\n    gap: ").concat(dt('fileupload.file.gap'), ";\n}\n\n.p-fileupload-file:last-child {\n    border-block-end: 0;\n}\n\n.p-fileupload-file-info {\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt('fileupload.file.info.gap'), ";\n}\n\n.p-fileupload-file-thumbnail {\n    flex-shrink: 0;\n}\n\n.p-fileupload-file-actions {\n    margin-inline-start: auto;\n}\n\n.p-fileupload-highlight {\n    border: 1px dashed ").concat(dt('fileupload.content.highlight.border.color'), ";\n}\n\n.p-fileupload-basic {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: ").concat(dt('fileupload.basic.gap'), ";\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ["p-fileupload p-fileupload-".concat(props.mode, " p-component")];
  },
  header: 'p-fileupload-header',
  pcChooseButton: 'p-fileupload-choose-button',
  pcUploadButton: 'p-fileupload-upload-button',
  pcCancelButton: 'p-fileupload-cancel-button',
  content: 'p-fileupload-content',
  fileList: 'p-fileupload-file-list',
  file: 'p-fileupload-file',
  fileThumbnail: 'p-fileupload-file-thumbnail',
  fileInfo: 'p-fileupload-file-info',
  fileName: 'p-fileupload-file-name',
  fileSize: 'p-fileupload-file-size',
  pcFileBadge: 'p-fileupload-file-badge',
  fileActions: 'p-fileupload-file-actions',
  pcFileRemoveButton: 'p-fileupload-file-remove-button'
};
var FileUploadStyle = BaseStyle.extend({
  name: 'fileupload',
  theme: theme,
  classes: classes
});

export { FileUploadStyle as default };
//# sourceMappingURL=index.mjs.map
