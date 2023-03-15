# Micro-Frontend Multirepo Module Federation

# Module Federation

Multirepo Micro-Frontend Implementation using **Module Federation**.

## Tools

-   [Angular-Architects/Module-Fedration](https://www.npmjs.com/package/@angular-architects/module-federation)
-   [Angular-Architects/Module-Fedration-Tools](https://www.npmjs.com/package/@angular-architects/module-federation-tools)

    ### Global State Management

-   [Redux-Micro-Frontend](https://www.npmjs.com/package/redux-micro-frontend)

## Getting Started

Module Federation includes, currently three projects:

1. **Shell**, the main project.
2. **ProjectOne**, the first microfrontend subProject.
3. **ProjectTwo**, the second microfrontend subProject.

In every app you should run:

`npm install`

Firstly, you should run **Shell** with this command (port 4200):

`ng serve`

Secondly, you should run **ProjectOne** with this command (port 4201):

`ng serve`

And Also, you should run **ProjectTwo** with this command (port 4202):

`ng serve`

## Description

**ProjectOne** exposes to **Shell** _Dashboard Module_ which includes a table. **Shell** can access _Dashboard Module_ via routing.

**ProjectTwo** exposes to **Shell** and particularly into **Shell's Form Component** _Form Component_ which includes a form.

By entering data in form and clicking submit, the submited data stored in _Global State_. Then we can retrieve these data inside _DashboardModule_ with _Global State_ and show them inside the table.
