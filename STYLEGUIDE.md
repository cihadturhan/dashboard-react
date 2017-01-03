##Code Style Guide
**Note:** Let .editorconfig override your configuration when Webstorm asks

---
```indent_style = space
indent_size = 2
```
Use double <kbd>space</kbd> for indentation, (no worries, if you use <kbd>Tab</kbd>, 
most IDE will automatically convert to double space).

> Q: Why double spaces instead of tabs?

This is a react project, meaning that, you use html & js together. And it's easy to reach the limit the horizontal limit.


---
```
quote_type = single
```
Always use single quotes for strings for JS, CSS and double quotes for HTML, 
unless you need to include single quotes inside string. 

######Examples:
```javascript
//JAVASCRIPT
let a = 'Hello'; 
let b = 'She said "Yeah"'
let c = "Sometimes you need to use single brackets (') inside text"; 
let d = `Use backticks only if you need to inject ${variable}`;

```
```css
/*CSS or LESS*/
*{
  background-image: url('http://example.com/test.png');
  content: '';
}
```
```html
<!--HTML-->
<div id="container" title="Hello"> </div>
```
---
```
indent_brace_style = K&R
```
Use K&R Style braces. Open brace on the same line. Close it to the next line.
See [detailed indent style here](https://en.wikipedia.org/wiki/Indent_style#Placement_of_braces)
######Examples:
```
while (x == y) {
    something();
    somethingelse();
}

constructor(){
   //...
}

x.map( y => {
  return y.toLowerCase();
});
```

**See more on `.editorconfig` file**

---


##File & Folder Structure
#### New Pages
- If you need a new page, create a directory under `App/pages`, ideally the same name with 
the corresponding page url. 

######Example
`App/pages/appreport/` => `https://.../appreport/`

- If you need a subpage, follow the same pattern and create `pages` subdirectory. You can add more 
pages if needed later.
######Example
`App/pages/leaderboard/`**`pages`**`/new/` => `https://.../leaderboard/new/` 

---
####Naming Convention
- All folders are lowercase
######Examples
```
constants/
config/
```
- `Components` or `Containers` are `CamelCase` starting with Uppercase
######Examples
```
App.js
Boilerplate.js
NavbarSearch.js
```
- Others (constants, redactions (i.e. reducers + actions)) is camelCase starting with lowercase
######Example
```
initialState.js
user.js
```
---

#### Code Reuse
- We're using `moduleDirectories` in WebPack config which implies `shared` folders are reachable without using `../../../..`
######Example

```
client
├── App
│   └── pages
│       ├── leaderboard
│       │   ├── components
│       │   │   └── Component1.js
│       │   ├── pages
│       │   └── index.js
│       ├── shared
│       │   └── constants
│       │       ├── settings.js
│       │       └── urls.js
│       └── index.js
├── shared
│   └── components
│   │  └── AppImage.js
│   └──util.js
└── index.js
```
In Component1.js, you can freely use
```javascript
import AppImage from 'components/AppImage';
import settings from 'constants/settings';
import urls from 'constants/urls';
```
Webpack will search for shared folder starting from `Component1.js` directory to the `root`

- If you need to share a file with other pages or components, move it inside of `/shared` folder of the **closest common parent** 
so you don't have to pollute root `shared` folder.
######Example
```
client
├── App
│   └── pages
│       ├── leaderboard
│       │   ├── components
│       │   │   └── Component1.js
│       │   ├── pages
│       │   │   ├──top
│       │   │   │   └──components
│       │   │   │      └──AppHeader.js
│       │   │   └──new
│       │   └── index.js
│       ├── shared
│       │   └── constants
│       │       ├── settings.js
│       │       └── urls.js
│       └── index.js
├── shared
│   └── components
│   │  └── AppImage.js
│   └──util.js
└── index.js
```
If `new` page needs `AppHeader.js`, move it under `leaderboard/shared/`
```
client
├── App
│   └── pages
│       ├── leaderboard
│       │   ├── components
│       │   │   └── Component1.js
│       │   ├── pages
│       │   │   ├──top
│       │   │   └──new
│       │   │   └──shared
│       │   │       └──components
│       │   │          └──AppHeader.js
│       │   └── index.js
│       ├── shared
│       │   └── constants
│       │       ├── settings.js
│       │       └── urls.js
│       └── index.js
├── shared
│   └── components
│   │  └── AppImage.js
│   └──util.js
└── index.js
```
Now, you can use inside both `top` and `new` directories inside the following format
```
import AppHeader from `components/AppHeader.js`
```

##Coding Styleguide
- Use ES6, ES7 features and native javascript as possible.

Don't
```
$.each(items, (d, i) => {});
_.map(items, (d, i) => {});
let myNewObject = _.extend({}, myObject, otherObject); 
```
Do
```
items.forEach((d, i) => {});
items.map((d, i) => {});
let myNewObject = Object.assign({}, myObject, otherObject};
```
- If your component/container consists of one renderable block use single file.
######Example
```
components
   ├── Component1.js
   └── Component2.js
```
Usage
```javascript
import Comp1 from 'component1';
import Comp2 from 'component2';
````
- If you realize your component/container consists of multiple renderable blocks, create a folder with the same
name and create index.js that gathers other modules
######Example
```
components
   ├── Component1.js
   │   ├──index.js //Imports SubComponent1 and SubComponent2
   │   ├──SubComponent1.js
   │   └──SubComponent2.js
   └── Component2.js
```
Usage — Note that nothing changes and you use it as is 
```javascript
import Comp1 from 'component1';
import Comp2 from 'component2';
```
