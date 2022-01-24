## Adding Routing

- install react-router-dom
```
npm install react-router-dom
```
- Adding routing tool to our codes so that we have this thing watching for url changes and we need to let this thing tool known which component should be loaded as a page for which route for which url.

- add `pages` folder in src. In the pages folder, add couple of react components which built like other components but which will be loaded by this router, when certain urls are visited

- ## Adding Routing

- install react-router-dom
```
npm i react-router-dom
```
- Adding routing tool to our codes so that we have this thing watching for url changes and we need to let this thing tool known which component should be loaded as a page for which route for which url.

- add `pages` folder in src. In the pages folder, add couple of react components which built like other components but which will be loaded by this router, when certain urls are visited

## Add pages components
1. add the following files in pages
> AllMeetups.js
>Favorites.js
>NewMeetup.js

2. index.js
 -  import BrowserRouter 
 -  add 
  
```  
<BrowserRouter>
<App />
</BrowserRouter> 
```
3. in App.js
   - import route `import { Route,  } from 'react-router-dom'`
   - import AllMeetupsPage, NewMeetupPage, FavoritesPage
   - insert `<Route><Route/>` in the return.
   - add the path attribute to router `<Route path ='/'><Route/>`
   - add the components inside `<Route><Route/>`
  
```js
 import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
```

把所有 route放在 routes 里面是为了每个页面能 点击某个 `/x` 单独显示该页面，不然，每个 `/x`, 会显示在一起。

## Adding Links & Navigation


## CSS Modules