# GOVUK ReactJS Dynamic Form Generator Demo

This is a ReactJS application designed to demonstrate how we can dynamically build a GOVUK style form in ReactJS using a form definition provided in json format. The form components are based on those from the existing govuk-react repository, which in turn are based on this standard GDS design system [here](https://design-system.service.gov.uk/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. If not, you can download and install them from [here](https://nodejs.org/en/download/).

### Installing

Clone the repository to your local machine.

\```bash
git clone https://github.com/paullewis-borman/govuk-reactjs-dynamic-form-demo
\```

Navigate into the project directory.

\```bash
cd <project_directory>
\```

Install the project dependencies.

\```bash
npm install
\```

Install the `govuk-react` library.

\```bash
npm install govuk-react
\```

Install React and ReactDOM.

\```bash
npm install react react-dom
\```

### Running the Application

To start the application, run:

\```bash
npm start
\```

The application will start and can be accessed at `http://localhost:3000`.

## Form Structure

The form structure is defined in the `form-structure.js` file located in the root directory. This file contains the JSON that is used to dynamically generate the form.

In a real-world application, we would not use JSON from a static JS file. Instead, we would retrieve the JSON via an API that provides the JSON form layout for the particular request form we want. This functionality is yet to be implemented.

## Built With

* [ReactJS](https://reactjs.org/) - The web framework used
* [govuk-react](https://github.com/govuk-react/govuk-react) - GOV.UK components for React

## Authors

* **Your Name** - *Initial work* - [YourGithubUsername](https://github.com/YourGithubUsername)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc