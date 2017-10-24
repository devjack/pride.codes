+++
showonlyimage = false
image = "/img/posters/pride_bars.png"
date = "2017-09-10"
title = "Pride bars"
weight = 2
+++

Add a simple pride strip at the top of your website or an element on your page.
<!--more-->

## Pride bar to your main page.
There are a number of ways you can add a pride bar to your site or widget.

#### Method 1 (Simplest): Just add our styles
Simply include our stylesheet and we'll apply the styles to your `<body>` tag.

```
<link rel="stylesheet" href="https://cdn.pride.codes/css/bar_body.css">
```

Note: we need to change margins of the body tag, so if you have custom resets you might want to test this first.

#### Method 2: Add a class to `<body>`
You can load our pride bar and add a class to your body tag.  e.g.

```
...
    <link rel="stylesheet" href="https://cdn.pride.codes/css/bar_helpers.css">
</head>
<body class="pride-bar">
...
```

#### Method 3: Add a `<div>`
If you would prefer to apply styles to a positioned DIV, you can use:

```
...
    <link rel="stylesheet" href="https://cdn.pride.codes/css/bar_helpers.css">
...
<!-- And then later in your DOM -->
...
<div class="pride-strip">
...
```

While not required, we'd recommend adding the `<div>` as the first child of `<body>`.
This method will also work if you are adding a pride strip to an existing div or widget in your layout
