# React Router Notes

This section contains the notes taken for React Router App from Udemy Course
Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more! by Maximilian Schwarzmüller

## Install React Router DOM

```js
npm install react-router-dom
```

## Import createBrowserRouter in App.js file

```js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
```

## Create the Routes

There are Two steps to create the routes:

Step 1:

```js
const routes = createBrowserRouter([{ path: '/', element: <Home /> }]);
```

In the above code snippet, we are creating a new route for the '/' route and asking to render the Home component.

Home is a new component created inside the pages folder.

```js
const Home = () => {
  return <div>Home</div>;
};
export default Home;
```

Step 2:

Add the RouterProvider as below:

```js
function App() {
  return <RouterProvider router={routes} />;
}
```

Adding Multiple Routes

```js
const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/products', element: <Products /> },
]);
```

## Alternative approach to create Routes:

Import createRoutesFromElements from react-router-dom

```js
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
```

Create Route Definitions:

```js
const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />}></Route>
    <Route path="/products" element={<Products />}></Route>
  </Route>
);
```

Create Browser Router using the routeDefinitions:

```js
const routes = createBrowserRouter(routeDefinitions);
```

## Using Link to navigate across links

```js
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/products">Product Page</Link>
    </div>
  );
};
export default Home;
```

## Creating a Main Navigation Page

```js
import { Link } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Products</Link>
      </li>
    </ul>
  );
};
export default MainNavigation;
```

## Using MainNavigation

Step 1: Create a Root Layout:

```js
import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

const Root = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};
export default Root;
```

Step 2: Update the child routes to Render inside Root Layout

```js
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
    ],
  },
]);
```

## Handling Errors with error page

Step 1: Add an error page

```js
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <h1>An Error Occurred</h1>
    </>
  );
};
export default ErrorPage;
```

Step 2: Update the route definitions with the `errorElement: <ErrorPage />`:

```js
const routes = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
    ],
  },
]);
```

## Using NavLink to highlight the active links

Replace the Link to NavLink and add the styles.

```js
<NavLink
to="/"
className={({isActive}) => isActive ? classes.active: undefined}
end
>Home</NavLink>

<NavLink
to="/products"
className={({isActive}) => isActive ? classes.active: undefined}>Products</NavLink>
```

Note: See the use of end keyword with the / route

## Programmatic Navigation using useNavigate() hook

```js
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate('/products');
  }

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/products">Product Page</Link>
      <p>
        <button onClick={handleNavigate}>products</button>
      </p>
    </div>
  );
};
export default Home;
```

## Displaying Individual Items

Step1: Create the ProductDetailsPage

```js
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const params = useParams();
  return (
    <div>
      <h1>ProductDetails</h1>
      <p>{params.productId}</p>
    </div>
  );
};
export default ProductDetails;
```

The `useParams()` hook provides access to the parameters. In this cae

Step 2: Update the route definitions

```js
const routes = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <ProductDetailsPage /> },
    ],
  },
]);
```

The parameter ```productId``` will be available through the useParams hook in the above snippet.
