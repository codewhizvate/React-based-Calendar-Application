# React-based Calendar Application

## Objective
The **React-based Calendar Application** is designed to help companies maintain strong professional relationships by tracking communications with other organizations. It provides a centralized platform to log past interactions, plan future communications, and manage follow-up frequencies based on predefined schedules. The application includes the following modules:
- **Admin Module**: For managing companies and communication methods.
- **User Module**: For visualizing and managing communication tasks.
- **Reporting and Analytics Module**: For actionable insights and performance metrics.

## Features

### Admin Module
- **Company Management**: Add, edit, and delete companies. Each company includes:
  - Name
  - Location
  - LinkedIn Profile
  - Emails
  - Phone Numbers
  - Comments
  - Communication Periodicity (default time interval for scheduled communications)
  
- **Communication Method Management**: Define available communication methods with:
  - Name (e.g., "Visit", "LinkedIn Post")
  - Description
  - Sequence (order of communication methods)
  - Mandatory Flag (whether the method is mandatory)

  Default communication methods include:
  1. LinkedIn Post
  2. LinkedIn Message
  3. Email
  4. Phone Call
  5. Other

### User Module
- **Dashboard**: A grid-like view displaying:
  - Company Name
  - Last Five Communications (type and date)
  - Next Scheduled Communication (type and date)
  - Color-Coded Highlights:
    - Red for overdue communication
    - Yellow for communication due today
  - Users can disable or override highlights.

- **Interactive Features**: 
  - Hover effect for viewing notes or comments on completed communications.
  - Communication Action to log new communications (select type, date, and notes).
  - Notifications for overdue and due communications, displayed in dedicated grids.

- **Calendar View**: 
  - View past and upcoming communications with their respective methods and dates.

### Reporting and Analytics Module
- **Communication Frequency Report**: Visual representation (e.g., bar chart or pie chart) showing communication frequency by method.
- **Engagement Effectiveness Dashboard**: Tracks and displays the effectiveness of communication methods (e.g., response rates).
- **Overdue Communication Trends**: Trendline or heatmap of overdue communications.
- **Real-Time Activity Log**: Live feed of communication activities, sortable by date, user, or company.

## Setup and Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js**: Version 14.x or higher
- **npm**: Version 6.x or higher

### Clone the Repository
Clone the repository from GitHub:
```bash
git clone https://github.com/codewhizvate/React-based-Calendar-Application.git
cd React-based-Calendar-Application

## Live Demo

Check out the live version of this app on [Netlify]([https://your-netlify-link.netlify.app](https://calender-applications.netlify.app/)).

### Install Dependencies
To install the required dependencies, run the following command:

```bash
npm install

