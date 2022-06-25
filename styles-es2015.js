(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "* {\n  font-family: \"Roboto\", sans-serif;\n  box-sizing: border-box;\n}\n*:focus {\n  outline: none;\n}\n* ::-webkit-scrollbar {\n  width: 7px;\n  height: 7px;\n}\n* ::-webkit-scrollbar-track {\n  background: #cdb4eb;\n}\n* ::-webkit-scrollbar-thumb {\n  background: rgba(42, 23, 66, 0.2);\n  border-radius: 10px;\n}\n* ::-webkit-scrollbar-thumb:hover {\n  background: rgba(42, 23, 66, 0.6);\n}\nhtml {\n  scroll-behavior: smooth;\n  width: 100%;\n}\nbody {\n  background-color: #FFF;\n  width: 100%;\n  margin: 0;\n  color: #65606e;\n  padding: 0;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\nimg {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.title-section {\n  font-weight: bold;\n  font-size: 2.25vw;\n  color: #2A1742;\n  position: relative;\n  margin-bottom: 2rem;\n}\n.title-section::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -25px;\n  border-radius: 50%;\n  background: rgba(205, 180, 235, 0.38);\n  width: 3.5vw;\n  height: 3.5vw;\n  z-index: -1;\n  -webkit-animation: moving 10s linear infinite;\n          animation: moving 10s linear infinite;\n}\n.fade-up {\n  opacity: 0;\n  -webkit-animation: fadeUp 0.8s cubic-bezier(0.29, 0.37, 0, 0.99) forwards;\n          animation: fadeUp 0.8s cubic-bezier(0.29, 0.37, 0, 0.99) forwards;\n}\n.fade-up-component {\n  -webkit-animation: fadeUpComponent 0.8s cubic-bezier(0.29, 0.37, 0, 0.99) forwards;\n          animation: fadeUpComponent 0.8s cubic-bezier(0.29, 0.37, 0, 0.99) forwards;\n}\n@-webkit-keyframes moving {\n  0% {\n    -webkit-transform: translate(-0.7rem, 0rem);\n            transform: translate(-0.7rem, 0rem);\n  }\n  25% {\n    -webkit-transform: translate(0rem, 0.7rem);\n            transform: translate(0rem, 0.7rem);\n  }\n  50% {\n    -webkit-transform: translate(0.7rem, 0rem);\n            transform: translate(0.7rem, 0rem);\n  }\n  100% {\n    -webkit-transform: translate(-0.7rem, 0rem);\n            transform: translate(-0.7rem, 0rem);\n  }\n}\n@keyframes moving {\n  0% {\n    -webkit-transform: translate(-0.7rem, 0rem);\n            transform: translate(-0.7rem, 0rem);\n  }\n  25% {\n    -webkit-transform: translate(0rem, 0.7rem);\n            transform: translate(0rem, 0.7rem);\n  }\n  50% {\n    -webkit-transform: translate(0.7rem, 0rem);\n            transform: translate(0.7rem, 0rem);\n  }\n  100% {\n    -webkit-transform: translate(-0.7rem, 0rem);\n            transform: translate(-0.7rem, 0rem);\n  }\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadeUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2rem);\n            transform: translateY(2rem);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes fadeUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2rem);\n            transform: translateY(2rem);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@-webkit-keyframes fadeUpComponent {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(5rem);\n            transform: translateY(5rem);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes fadeUpComponent {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(5rem);\n            transform: translateY(5rem);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@media (max-width: 1024px) {\n  * {\n    cursor: default !important;\n  }\n  *:focus {\n    outline: none;\n  }\n\n  .title-section {\n    font-size: 4vw;\n  }\n  .title-section::before {\n    left: -2vw;\n    width: 5vw;\n    height: 5vw;\n  }\n}\n@media (max-width: 699px) {\n  .title-section {\n    font-size: 6vw;\n  }\n  .title-section::before {\n    left: -3vw;\n    width: 7.5vw;\n    height: 7.5vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9GOlxcYmFja3VwIHJvbWlcXGRvY3VtZW50b3NcXERlc2Fycm9sbG8gd2ViXFxwb3J0Zm9saW9cXHBvcnRmb2xpby1hbmd1bGFyL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvRjpcXGJhY2t1cCByb21pXFxkb2N1bWVudG9zXFxEZXNhcnJvbGxvIHdlYlxccG9ydGZvbGlvXFxwb3J0Zm9saW8tYW5ndWxhci9zcmNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlDQ0hVO0VESVYsc0JBQUE7QUVERjtBRkdFO0VBQ0UsYUFBQTtBRURKO0FGSUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBRUZKO0FGS0U7RUFDRSxtQkNiWTtBQ1VoQjtBRk1FO0VBQ0UsaUNBQUE7RUFDQSxtQkFBQTtBRUpKO0FGT0U7RUFDRSxpQ0FBQTtBRUxKO0FGU0E7RUFDRSx1QkFBQTtFQUNBLFdBQUE7QUVORjtBRlNBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGNDaENnQjtFRGlDaEIsVUFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBRU5GO0FGU0E7RUFDRSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHVCQUFBO0FFTkY7QUZTQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQzlDZ0I7RUQrQ2hCLGtCQUFBO0VBQ0EsbUJBQUE7QUVORjtBRlFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7VUFBQSxxQ0FBQTtBRU5KO0FGVUE7RUFDRSxVQUFBO0VBQ0EseUVBQUE7VUFBQSxpRUFBQTtBRVBGO0FGVUE7RUFDRSxrRkFBQTtVQUFBLDBFQUFBO0FFUEY7QUZVQTtFQUNFO0lBQ0UsMkNBQUE7WUFBQSxtQ0FBQTtFRVBGO0VGU0E7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VFUEY7RUZTQTtJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RUVQRjtFRlNBO0lBQ0UsMkNBQUE7WUFBQSxtQ0FBQTtFRVBGO0FBQ0Y7QUZMQTtFQUNFO0lBQ0UsMkNBQUE7WUFBQSxtQ0FBQTtFRVBGO0VGU0E7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VFUEY7RUZTQTtJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RUVQRjtFRlNBO0lBQ0UsMkNBQUE7WUFBQSxtQ0FBQTtFRVBGO0FBQ0Y7QUZVQTtFQUNFO0lBQ0UsVUFBQTtFRVJGO0VGV0E7SUFDRSxVQUFBO0VFVEY7QUFDRjtBRkVBO0VBQ0U7SUFDRSxVQUFBO0VFUkY7RUZXQTtJQUNFLFVBQUE7RUVURjtBQUNGO0FGWUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0VFVkY7RUZhQTtJQUNFLFVBQUE7SUFDQSxnQ0FBQTtZQUFBLHdCQUFBO0VFWEY7QUFDRjtBRkVBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsbUNBQUE7WUFBQSwyQkFBQTtFRVZGO0VGYUE7SUFDRSxVQUFBO0lBQ0EsZ0NBQUE7WUFBQSx3QkFBQTtFRVhGO0FBQ0Y7QUZjQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG1DQUFBO1lBQUEsMkJBQUE7RUVaRjtFRmVBO0lBQ0UsVUFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7RUViRjtBQUNGO0FGSUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0VFWkY7RUZlQTtJQUNFLFVBQUE7SUFDQSxnQ0FBQTtZQUFBLHdCQUFBO0VFYkY7QUFDRjtBRmdCQTtFQUNFO0lBQ0UsMEJBQUE7RUVkRjtFRmdCRTtJQUNFLGFBQUE7RUVkSjs7RUZrQkE7SUFDRSxjQUFBO0VFZkY7RUZpQkU7SUFDRSxVQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7RUVmSjtBQUNGO0FGb0JBO0VBQ0U7SUFDRSxjQUFBO0VFbEJGO0VGb0JFO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VFbEJKO0FBQ0YiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNyYy92YXJpYWJsZXMnO1xuXG4qIHtcbiAgZm9udC1mYW1pbHk6ICRmb250LWdyYWw7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA3cHg7XG4gICAgaGVpZ2h0OiA3cHg7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLWJvbGQtdGV4dCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3ItYm9sZC10ZXh0LCAwLjYpO1xuICB9XG59XG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogJGNvbG9yLXRleHQtZ3JhbDtcbiAgcGFkZGluZzogMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW1nIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xufVxuXG4udGl0bGUtc2VjdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIuNXZ3ICogMC45O1xuICBjb2xvcjogJGNvbG9yLWJvbGQtdGV4dDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMDUsIDE4MCwgMjM1LCAwLjM4KTtcbiAgICB3aWR0aDogMy41dnc7XG4gICAgaGVpZ2h0OiAzLjV2dztcbiAgICB6LWluZGV4OiAtMTtcbiAgICBhbmltYXRpb246IG1vdmluZyAxMHMgbGluZWFyIGluZmluaXRlO1xuICB9XG59XG5cbi5mYWRlLXVwe1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVVcCAuOHMgJGVhc2luZyBmb3J3YXJkcztcbn1cblxuLmZhZGUtdXAtY29tcG9uZW50e1xuICBhbmltYXRpb246IGZhZGVVcENvbXBvbmVudCAuOHMgJGVhc2luZyBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBtb3Zpbmcge1xuICAwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtLjdyZW0sMHJlbSk7XG4gIH1cbiAgMjUle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDByZW0sIC43cmVtKTtcbiAgfVxuICA1MCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLjdyZW0sIDByZW0pO1xuICB9XG4gIDEwMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLS43cmVtLCAwcmVtKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVVcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycmVtKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZVVwQ29tcG9uZW50IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVyZW0pO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICoge1xuICAgIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC50aXRsZS1zZWN0aW9uIHtcbiAgICBmb250LXNpemU6IDR2dztcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBsZWZ0OiAtMnZ3O1xuICAgICAgd2lkdGg6IDV2dztcbiAgICAgIGhlaWdodDogNXZ3O1xuICAgIH1cbiAgfVxufVxuXG5cbkBtZWRpYShtYXgtd2lkdGg6IDY5OXB4KSB7XG4gIC50aXRsZS1zZWN0aW9uIHtcbiAgICBmb250LXNpemU6IDZ2dztcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBsZWZ0OiAtM3Z3O1xuICAgICAgd2lkdGg6IDcuNXZ3O1xuICAgICAgaGVpZ2h0OiA3LjV2dztcbiAgICB9XG4gIH1cbn1cbiIsIiRmb250LWdyYWw6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1zZWN1bmRhcnk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtY29kZTogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlO1xyXG4kcHJpbWFyeS1jb2xvcjogI2NkYjRlYjtcclxuJGNvbG9yLWZlYXR1cmVkOiAjY2U5YWZmO1xyXG4kaGVhdnktY29sb3I6ICM5ZjVhZjE7XHJcbiRjb2xvci10ZXh0LWdyYWw6ICM2NTYwNmU7XHJcbiRjb2xvci1ib2xkLXRleHQ6ICMyQTE3NDI7XHJcbiRjb2xvci10ZXh0LXNvZnQ6IHJnYmEoJGNvbG9yLWJvbGQtdGV4dCwgMC41Mik7XHJcbiRjb2xvci10ZXh0LXVsdHJhLXNvZnQ6IHJnYmEoJGNvbG9yLWJvbGQtdGV4dCwgMC40OCk7XHJcbiRuYXYtdGV4dDogIzkwODk5QzsgXHJcbiRlYXNpbmc6IGN1YmljLWJlemllcigwLjI5LCAwLjM3LCAwLCAwLjk5KTtcclxuIFxyXG5cclxuLy8gJGxpbGE6ICNEQkJBRUI7XHJcbi8vICRsaWxhLXRleHQ6ICNkYmE3ZjQ7IiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuKjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4qIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDdweDtcbn1cbiogOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNjZGI0ZWI7XG59XG4qIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCAyMywgNjYsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4qIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQyLCAyMywgNjYsIDAuNik7XG59XG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzY1NjA2ZTtcbiAgcGFkZGluZzogMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW1nIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xufVxuXG4udGl0bGUtc2VjdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIuMjV2dztcbiAgY29sb3I6ICMyQTE3NDI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi50aXRsZS1zZWN0aW9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogLTI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDUsIDE4MCwgMjM1LCAwLjM4KTtcbiAgd2lkdGg6IDMuNXZ3O1xuICBoZWlnaHQ6IDMuNXZ3O1xuICB6LWluZGV4OiAtMTtcbiAgYW5pbWF0aW9uOiBtb3ZpbmcgMTBzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLmZhZGUtdXAge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVVcCAwLjhzIGN1YmljLWJlemllcigwLjI5LCAwLjM3LCAwLCAwLjk5KSBmb3J3YXJkcztcbn1cblxuLmZhZGUtdXAtY29tcG9uZW50IHtcbiAgYW5pbWF0aW9uOiBmYWRlVXBDb21wb25lbnQgMC44cyBjdWJpYy1iZXppZXIoMC4yOSwgMC4zNywgMCwgMC45OSkgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgbW92aW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wLjdyZW0sIDByZW0pO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHJlbSwgMC43cmVtKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuN3JlbSwgMHJlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAuN3JlbSwgMHJlbSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlVXAge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnJlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZVVwQ29tcG9uZW50IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVyZW0pO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICoge1xuICAgIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xuICB9XG4gICo6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAudGl0bGUtc2VjdGlvbiB7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gIH1cbiAgLnRpdGxlLXNlY3Rpb246OmJlZm9yZSB7XG4gICAgbGVmdDogLTJ2dztcbiAgICB3aWR0aDogNXZ3O1xuICAgIGhlaWdodDogNXZ3O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgLnRpdGxlLXNlY3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogNnZ3O1xuICB9XG4gIC50aXRsZS1zZWN0aW9uOjpiZWZvcmUge1xuICAgIGxlZnQ6IC0zdnc7XG4gICAgd2lkdGg6IDcuNXZ3O1xuICAgIGhlaWdodDogNy41dnc7XG4gIH1cbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\backup romi\documentos\Desarrollo web\portfolio\portfolio-angular\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map