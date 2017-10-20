# Reflect sample app with user paramterization and Auth0 login

For a walkthrough on how to convert this boilerplate into a secure reporting application using your own data, refer to [this guide](https://reflect.io/blog).

## Running the Sample

Install the dependencies.

```bash
npm install
```

Rename `.env.example` to `.env` and replace the values for `AUTH0_CLIENT_ID`, `AUTH0_DOMAIN`, and `AUTH0_CLIENT_SECRET` with your Auth0 credentials. If you don't yet have an Auth0 account, [sign up](https://auth0.com/signup) for free. Then replace the values for `REFLECT_SECRET_KEY`, `REFLECT_ACCESS_KEY` with your Reflect project credentials. Again, if you don't yet have a Reflect account, [sign up](https://app.reflect.io/register) for free.

```bash
# copy configuration and replace with your own
cp .env.example .env
```

Run the app.

```bash
npm start
```

The app will be served at `localhost:3000`.

## What is Reflect?

Reflect helps you to:

* Serve realtime dashboards and visualizaitons to your users, embedded directly into your application and themed to match your brand
* Build interactive reports without writing a line of code
* Parameterize your reports, so only authenticated users have access to private information
* Save and share drafts across teams, and export reports to PDFs
* Interact with our API to build robust custom controls for users to navigate their data

## Create a free account in Reflect

1. Go to [Reflect](https://app.reflect.io/register) and submit your credentials to register.
2. Activate your account via the confirmation email.
3. Follow the onboarding flow to build your first report.

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free account in Auth0

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Author

[Reflect](reflect.io) building on top of [another sample app](https://github.com/auth0-samples/auth0-nodejs-webapp-sample/tree/embedded-login) by [Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
