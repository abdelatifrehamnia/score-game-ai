# Game Center Management App

This is a full-stack application for managing a game center, with separate features for customers and workers.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **UI Library:** [shadcn/ui](https://ui.shadcn.com/)
- **Database:** [Neon](https://neon.tech/) (Postgres) with [Prisma ORM](https://www.prisma.io/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Realtime:** [Pusher](https://pusher.com/) (for booking updates)

## Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Set up environment variables:**

    Create a `.env` file in the root of the project and add the following variables:

    ```
    DATABASE_URL="your_neon_database_url"
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
    CLERK_SECRET_KEY="your_clerk_secret_key"
    ```

3.  **Sync the database:**

    ```bash
    npx prisma db push
    ```

4.  **Seed the database with initial data:**

    ```bash
    npm run db:seed
    ```

5.  **Run the development server:**

    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **User Authentication:** Customers and Workers can sign up and sign in using Clerk.
- **Role-based Access Control:** The application has two roles: `Customer` and `Worker`.
- **Device and Game Browsing:** Users can browse the available devices and games.
- **Booking System:** Customers can book a device for a specific time slot.
- **Worker Dashboard:** Workers can manage devices and bookings.
- **Real-time Updates:** The worker dashboard is updated in real-time using Pusher.