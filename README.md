# HTML5 Web APIs Showcase

A modern, interactive web application that demonstrates several powerful HTML5 Web APIs with clean visuals and practical examples.

## Features

- **Geolocation API**: Get the user's current position with coordinates and accuracy
- **Vibration API**: Experience different vibration patterns (mobile compatible)
- **Battery API**: View battery level, charging status with real-time updates
- **Notifications API**: Request permission and display browser notifications

## Technologies Used

- HTML5
- CSS3 with Flexbox and Grid
- Vanilla JavaScript
- Modern Web APIs

## Browser Compatibility

This demo works best in modern browsers that support the featured APIs:
- Chrome (recommended)
- Firefox
- Safari
- Edge

Note: Some APIs (like Vibration API) primarily work on mobile devices or specific browsers.

## How to Use

1. Clone or download this project
2. Open the `index.html` file in a modern web browser
3. Interact with the different API demonstrations:
   - Click "Get My Location" to see geolocation data
   - Try vibration patterns (on supported devices)
   - Check your device's battery status
   - Request notification permissions and send test notifications

## API Details

### Geolocation API
Retrieves the user's current geographical position with latitude, longitude, and accuracy metrics. Requires user permission.

### Vibration API
Provides hardware vibration feedback on supported devices with customizable patterns.

### Battery API
Accesses information about the system's battery charge level and charging status with real-time updates.

### Notifications API
Displays system notifications to the user after obtaining proper permissions.

## File Structure

```
web-api-showcase/
├── index.html          # Main application file
├── README.md           # Project documentation
```

## Customization

You can easily extend this demo by:
1. Adding more Web API sections following the existing pattern
2. Modifying the color scheme in the CSS `:root` variables
3. Enhancing the visual design of specific components

## Browser Support Notes

- Geolocation requires HTTPS in production environments
- Vibration API works primarily on mobile devices
- Battery API may have limited support in some browsers
- Notifications require user permission

## License

This project is open source and available under the MIT License.
