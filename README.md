# Starfall - Full-Stack Web Application Starter Kit

<video src="https://github.com/user-attachments/assets/eaef4da2-e49c-48b1-9e84-7080a7a3b217" controls autoPlay>Your browser does not support the video tag.</video>

Starfall is a Neon-powered starter kit to streamline building full-stack web applications for developers.

It comes equipped with everything developers need to create cutting-edge, high-performance apps.

The purpose of Starfall is to provide developers with an easy-to-use full-stack web application.

It has all the resources you want to construct innovative, scalable & reactive applications.

Full documentation can be found at [Starfall Docs](https://starfall-docs.vercel.app/).

## 🧳 Application Tour

Here's a quick tour of the application:

| Light Mode | Dark Mode |
|------------|-----------|
| '/' page![Light1](/public/light1.PNG "Light Mode") | '/' page![Dark1](/public/dark1.PNG "Dark Mode") |
| '/dashboard' page![Light2](/public/light2.PNG "Light Mode") | '/dashboard' page![Dark2](/public/dark2.PNG "Dark Mode") |
| '/admin' page![Light3](/public/light3.PNG "Light Mode") | '/admin' page![Dark3](/public/dark3.PNG "Dark Mode") |
| '/admin' page![Light4](/public/light4.PNG "Light Mode") | '/admin' page![Dark4](/public/dark4.PNG "Dark Mode") |

## 🛠️ Core Technologies

A quick look at what Starfall offers:

- **Next.js:** A powerful React framework that makes it easy to build SEO-friendly, fast web apps. Enables us to easily do server-side rendering and build static websites.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **Shadcn/UI:** A kit of prebuilt UI components This is perfect for creating visually attractive user interfaces.
- **Aceternity UI:** for other design elements that can make the overall application a little more aesthetically appealing.
- **Neon:** A serverless PostgreSQL database. It’s easy to manage and scales as your app scales.
- **Drizzle ORM:** An ORM (Object-Relational Mapping) tool that simplifies database operations, making it easier to interact with the database.
    - **SQL-like:** Allows you to write queries that feel like plain SQL.
    - **Relational:** Supports traditional relational database features.
- **Clerk:** This handles user authentication. It’s secure and flexible, managing sign-in, sign-up, and user profiles.
    > We use webhooks to connect Clerk with the database. This way, whenever a user is created, they’re also added to our backend.
- **TypeScript:** An upgrade to JavaScript that adds static typing. It helps catch errors early and makes your code more predictable.

## 🚀 Why Starfall?

### 1. **Comprehensive Starter Kit**
Starfall is more than just a basic template.

It offers a full set of tools and components. These tools work together to make your development process easier. Everything you need, like authentication and animations, is included right from the start.

### 2. **Scalable, and Easy to Maintain**
Starfall's architecture is built for growth.
   
It uses best practices for organizing folders, designing components, and managing state. This helps keep your project easy to maintain as it expands. Security features are also built-in to keep your project safe.

### 3. **Beautifully Designed UI**
Starfall makes your app look modern, thanks to Shadcn/UI and Aceternity UI.
   
You can easily switch between dark and light modes. Plus, you can customize gradients and blur effects for a unique look.

### 4. **Focus on Developer Experience**
Starfall is made with developers in mind.
   
The code is clean and easy to understand. It follows modern best practices and comes with good documentation. Pre-configured environments mean you spend less time setting up and more time building features.

## 📚 Getting Started

To begin using Starfall, all that is required is a couple of things.

### Step 1
- Well, the first thing you should do is make sure that Node.js is installed on your computer.
- You will even need npm, which is a tool for package management.
- After that, you're all set up to enter Starfall and build your app.

### Step 2

```bash
git clone https://github.com/ArjunCodess/neon-oss-starter-kit.git my-app
```
    

### Step 3

```bash
cd my-app
```
    
### Step 4

```bash
npm install
```

### Step 5

Rename the .env.example file to .env. And pull up your environment variables and paste them in the .env file.
    
Having trouble? Check out the [configuration guide](https://starfall-docs.vercel.app/docs/configuration)

### Step 6
    
```bash
npm run dev
```

### Step 7

And now, open [localhost:3000](http://localhost:3000) on your browser to continue.

That's it! You have successfully installed the Starfall Starter Kit on your machine. You can now start building your next big project using the built-in components and features provided by the kit.

## 💻 **What are the commands that you can use?**

These are the commands that you can use and what they do in brief:

- **`npm run dev`** - Starts the development server, allowing you to work on your project with hot-reloading enabled.
- **`npm run build`** - Compiles the project for production, optimizing it for performance.
- **`npm run start`** - Runs the compiled project in production mode.
- **`npm run lint`** - Checks the code for potential issues and inconsistencies using ESLint.
- **`npm run db:studio`** - Launches Drizzle Studio, a local database browser that allows you to explore and manage your database.
- **`npm run db:push`** - Pushes your schema changes directly to the database, useful for rapid local development and prototyping.
- **`npm run db:generate`** - Generates migrations based on your Drizzle schema, creating migration files that can be applied to your database.
- **`npm run db:migrate`** - Applies the generated migrations to your database, ensuring it matches your schema.

## 👨‍💻 My Journey

I chose this stack because it provides a complete set of tools for modern web development.

Using Next.js and Tailwind CSS makes building fast, responsive apps easy. Neon and Drizzle ORM simplify database management. Clerk handles authentication, which is crucial for secure applications. TypeScript adds extra reliability to the code. 

Throughout this process, I learned how to integrate these tools effectively. It was challenging but rewarding to see everything come together in a single starter kit. I would like to thank DEV and Neon for organising a challenge like this!

## 👌 Features

Starfall is packed with features that streamline full-stack web development.

The starter kit includes a complete full-stack to-do-list app with Next.js, Tailwind CSS, Shadcn/UI, Aceternity UI, Neon, Drizzle ORM, Clerk, and TypeScript.

These tools work together to help you build fast, secure, and scalable applications quickly.

## 💢 Challenges Faced

One of the biggest challenges I faced was writing the documentation.

It was tough to organize everything clearly, but I made it through. On the flip side, building the "extra" components and the admin page was a lot of fun. The dashboard page was surprisingly quick to put together, taking the least time overall.

## ☘ Future Plans

The Starfall template is complete on my end.

However, I’m open to continuing its development if there’s enough interest from the community.

With more feedback and contributions, I’d love to see where this project could go.

## 🤝 Community Contribution

I’m always open to new ideas and feedback from the community.

If you’d like to contribute to Starfall, feel free to fork the repository, submit pull requests, or open issues.

Your input is valuable, and I’m excited to see how this project can evolve with community involvement.

---

## ✍ PS

Thanks for checking out Starfall! 🎉

I hope this starter kit makes your development process easier and helps you build amazing projects quickly.

If you have any questions or feedback, feel free to reach out or open an issue on the GitHub repo.

Connect with me: [Linktree](https://linktr.ee/arjuncodess). Follow me on [X](https://x.com/arjuncodess).
