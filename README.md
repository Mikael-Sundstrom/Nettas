# Nettas Gardinsömnad
## Version
* App version 1.0
* [Angular CLI](https://github.com/angular/angular-cli) version 1.2.1.

## Font icons
+ TTF Size: 2716 bytes
+ 16 icons
### How to use:
HTML
```html
<span class="icon_home"></span>
```
CSS
```css
.icon_home:before {
  content: "\e800";
}
```
SCSS
```scss
@import "variables";
.icon_home {
  &:before {
    content: $icon_home;
  }
}
```
| Id  | Icon        | Class             | HTML entity | CSS     |               |
| --- | ----------- | ----------------- | ----------- | ------- | ------------- |
| #1  | Home        | `icon_home`       | `&#xe800;`  | `\e800` | ![](src/assets/fonts/png/home.png)      |
| #2  | person      | `icon_person`     | `&#xe801;`  | `\e801` | ![](src/assets/fonts/png/person.png)    |
| #3  | Map         | `icon_map`        | `&#xe802;`  | `\e802` | ![](src/assets/fonts/png/map.png)       |
| #4  | Call        | `icon_call`       | `&#xe803;`  | `\e803` | ![](src/assets/fonts/png/call.png)      |
| #5  | Email       | `icon_email`      | `&#xe804;`  | `\e804` | ![](src/assets/fonts/png/email.png)     |
| #6  | Message     | `icon_message`    | `&#xe805;`  | `\e805` | ![](src/assets/fonts/png/message.png)   |
| #7  | Textsms     | `icon_textsms`    | `&#xe806;`  | `\e806` | ![](src/assets/fonts/png/textsms.png)   |
| #8  | Album       | `icon_album`      | `&#xe807;`  | `\e807` | ![](src/assets/fonts/png/album.png)     |
| #9  | Send        | `icon_send`       | `&#xe808;`  | `\e808` | ![](src/assets/fonts/png/send.png)      |
| #10 | Refresh     | `icon_refresh`    | `&#xe809;`  | `\e809` | ![](src/assets/fonts/png/refresh.png)   |
| #11 | Sudoku      | `icon_sudoku`     | `&#xe80a;`  | `\e80a` | ![](src/assets/fonts/png/sudoku.png)    |
| #12 | Attach      | `icon_attach`     | `&#xe80b;`  | `\e80b` | ![](src/assets/fonts/png/attach.png)    |
| #13 | Translate   | `icon_translate`  | `&#xe80c;`  | `\e80c` | ![](src/assets/fonts/png/translate.png) |
| #14 | Backward    | `icon_backward`   | `&#xe80d;`  | `\e80d` | ![](src/assets/fonts/png/backward.png)  |
| #15 | Forward     | `icon_forward`    | `&#xe80e;`  | `\e80e` | ![](src/assets/fonts/png/forward.png)   |
| #16 | Close       | `icon_close`      | `&#xe80f;`  | `\e80f` | ![](src/assets/fonts/png/close.png)     |

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
