---
title: 'Markdown reference'
excerpt: "Sick of starters that accept markdown, but don't come with any built-in styling? Check out what works right out of the box."
coverImage: '/assets/blog/markdown-reference/book.jpg'
date: '2021-08-24T05:35:07.322Z'
author:
  name: sandypockets
  picture: '/assets/blog/authors/sandypockets_avatar.jpg'
ogImage:
  url: '/assets/blog/nextjs-for-blogs/cover.jpg'
---

# Markdown examples
Plenty of markdown starters don't come with any markdown styling. Your content to falls flat, and instead of spending the afternoon writing, you're nitpicking about padding around bullet points. Not this starter, everything is ready right out of the box. Check out how each element is styled below.

---

### Headings

```markdown
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
```

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

### Emphasis

```markdown
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

```

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

---

### Blockquotes

```markdown
> This is a block quote

> Another blockquote
> > With a nested reply
```

> This is a block quote

> Another blockquote
> > With a nested reply

---

### Links

```markdown
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a relative reference to a local file or page](../about)

URLs in angle brackets will automatically get turned into links. Check out
http://www.example.com or <http://www.example.com> and sometimes
example.com.
```

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a relative reference to a local file or page](../about)

URLs in angle brackets will automatically get turned into links. Check out
http://www.example.com or <http://www.example.com> and sometimes
example.com.

---

### Lists

##### Ordered

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

##### Unordered

- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
- Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
- Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

---

### Images

```markdown
![Some image alt](https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80)
```

![Some image alt](https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80)

You can use relative image paths too. 

```markdown
![Some alt text](/assets/blog/a-nextjs-blog-starter-you-actually-want-to-use/tree-minimal.jpg)
```

![Some alt text](/assets/blog/a-nextjs-blog-starter-you-actually-want-to-use/tree-minimal.jpg)

---

### Horizontal rule

The horizontal rule is what's used on this page to separate each section.

```markdown
---
```

---

### Code

```markdown
Inline `code` has `back-ticks around` it.
```

Inline `code` has `back-ticks around` it.

Or multi line, with built-in syntax highlighting:

##### JSX

```jsx
export default function SomeComponent() {
  return (
    <>
      <h1 className="text-2xl">The title</h1>
      <div className="flex justify-between">
        <p>Some content</p>
        <p>Some other content</p>
      </div>
    </>
  )
}
```

The syntax highlighting isn't just for React either. It supports most common languages. 

##### HTML

```html
<!DOCTYPE html>
<html>
  <body>
  <h1>Some title</h1>
  <p>Some content</p>
  </body>
</html>
```

##### Sass

```sass

$primaryYellow: #FFC017;
$primaryBlue: #174BFF;
$primaryFont: Newsreader;

div.topics-container {
  display: flex;
  justify-content: center;
  margin: 0 0 4rem 0;

  nav.topics {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 50vw;

    a {
      color: black;
      text-decoration: none;
      &.active {
        color: $primaryYellow;
      }
    }
  }
}
```

##### Ruby

```ruby
class ApplicationController < ActionController::Base

  before_action :find_current_user

  helper_method :has_session?

  def logged_in
    redirect_to new_session_path unless has_session?
  end

  def find_current_user
    @current_user = (User.find(session[:user_id]) if has_session?)
  end

  def has_session?
    session[:user_id].present?
  end
end
```

And many more. Check out the [full list of supported langauges](https://prismjs.com/#supported-languages) on PrismJS.

---

### Collapsible summaries

```markdown
<details>
  <summary>Click to open or close</summary>
      ```ejs
  <div class="row" id="productList">
    <% for(let item in product) { %>
      <div class="card">
        <p class="get-ids"><%= product[item].id %></p>
        <img src="<%= product[item].image %>" class="card-img-top" alt="...">
        <h3 class="card-title">
          <%= product[item].name %>
        </h3>
        <p class="card-body">
          <%= product[item].description %>
        </p>
        <div class="card-footer">
          <p>$ </p>
          <h5><%= product[item]['price_cents'] %></h5>
          <a href="#"><i class="fas fa-cart-plus add-burg-event"></i></a>
        </div>
      </div>
      <% } %>
  </div>
      ```
</details>
```

<br/>

<details>
<summary>Click to open or close</summary>

```ejs
<div class="row" id="productList">
  <% for(let item in product) { %>
    <div class="card">
      <p class="get-ids"><%= product[item].id %></p>
      <img src="<%= product[item].image %>" class="card-img-top" alt="...">
      <h3 class="card-title">
        <%= product[item].name %>
      </h3>
      <p class="card-body">
        <%= product[item].description %>
      </p>
      <div class="card-footer">
        <p>$ </p>
        <h5><%= product[item]['price_cents'] %></h5>
        <a href="#"><i class="fas fa-cart-plus add-burg-event"></i></a>
      </div>
    </div>
    <% } %>
</div>
```

</details>

