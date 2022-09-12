# Welcome to My synoptic project :wave:

## Tech Stack:

- NextJS
- Chakra UI
- Redux
- Cypress
- Jest
- Axios
- React-Hook-Form

# Run the app

To run the local version

```
yarn run dev
```

To vist the deploy

```
https://hoda-mire-le-restaurants.vercel.app/
```

# Design:

I have designed through figma buiding wireframe and UI.
Here access to my figma via <a>`https://www.figma.com/file/WwYNubn1K0lPY1Osd4Omp7/Les-restaurant?node-id=0%3A1`</a>

## Screenshots

<img src="public/assets/13.png" width="900" />
<img src="public/assets/14.png" width="900" />
<img src="public/assets/15.png" width="900" />
<img src="public/assets/16.png" width="900" />
<img src="public/assets/17.png" width="900" />

## UML

Here is the uml

<img src="public/assets/19.png" width="200" height="500" />

```

@startuml Restaurants

entity User {
id,
name,
image,
email,
}
entity Item {
id,
name,
description,
price,
allergies,
type,
image,
}

entity Order {
id
items: [
{
itemId: String,
qty: Number,
},
],
orderTotal
tableNumbe
userId
}

User::id -- Order::id
Order::order_id -- Item::id

@enduml

```

# Testing

Testing using Postman and Jest and cypress

<img src="public/assets/20.png" width="900" />
<img src="public/assets/21.png" width="900" />
<img src="public/assets/22.png" width="900" />
```
