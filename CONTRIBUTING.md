# Contributing to Dashbox Tabler Theme
We would love for you to contribute to Dashbox Tabler Theme and help make it even better than it is today! Here are how to setup your dev environment, and the list of planned Gizmos you can help us to create.

## Submitting a Pull Request (PR)
Before you submit your Pull Request (PR) consider the following guidelines:

1. Search GitHub for an open or closed PR that relates to your submission. You don't want to duplicate existing efforts.
2. Be sure that the new gizmo is listed below with high priority, or an issue describes the problem you're fixing.
3. Fork the `dashboxjs/theme-tabler` repo.
4. In your forked repository, make your changes in a new git branch, **prefixed by:**
- `"feat/gizmo-"` for a new gizmo (e.g. `feat/gizmo-color-picker`)
- `"feat/"` for a new feature (e.g. `feat/fr-translation`)
- `"fix/"` for an issue/bug fix (e.g. `fix/gizmo-button-blink`)
5. Create your patch, including appropriate test cases.
6. Commit your changes using a descriptive commit message.
7. Push your branch to GitHub
8. In GitHub, send a pull request to `dashboxjs/theme-tabler`.

## Setup dev environment
Here are the steps to follow to have a ready-to-use development environment:
1. Install packages: `yarn`
2. Start development server: `yarn watch`
3. Link package: `yarn link:self`
4. Use this linked package as theme in the demo-app or your own Dashbox app

## Gizmos
Below are listed all the planned Gizmos for this theme. Feel free to [open a discussion](https://github.com/dashboxjs/theme-tabler/discussions/new?category=ideas) if you have a new Gizmo idea!  

### Actions

| Gizmo      | Priority | Target Version |
|------------|----------|----------------|
| Button     | 1        | 0.0.2          |
| Dropdown   | 2        |                |
| Breadcrumb | 3        |                |

### Data Entries

| Gizmo           | Priority | Target Version |
|-----------------|----------|----------------|
| Checkbox        | 1        |                |
| Input           | 1        |                |
| Radio           | 1        |                |
| Select          | 1        |                |
| DateTime Picker | 2        |                |
| Switch          | 2        |                |
| Typeahead       | 2        |                |
| Rate            | 3        |                |
| Slider          | 3        |                |
| Upload          | 3        |                |
| Color Picker    | 3        |                |

### Data Displays

| Gizmo       | Priority | Target Version |
|-------------|----------|----------------|
| Text        | 1        |                |
| Data Table  | 1        |                |
| Badge / Tag | 2        |                |
| Card        | 2        |                |
| Image       | 2        | 0.0.2          |
| Accordion   | 3        |                |
| Tabs        | 3        |                |

### Feedbacks

| Gizmo        | Priority | Target Version |
|--------------|----------|----------------|
| Alert        | 1        | 0.0.2          |
| Toast        | 2        |                |
| Modal        | 2        |                |
| Spinner      | 2        |                |
| Progress Bar | 3        |                |
