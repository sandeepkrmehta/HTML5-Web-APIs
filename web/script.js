
        // Geolocation API
        document.getElementById('get-location').addEventListener('click', () => {
            const output = document.getElementById('location-output');
            output.textContent = 'Getting location...';
            
            if (!navigator.geolocation) {
                output.textContent = 'Geolocation is not supported by your browser';
                return;
            }
            
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    const accuracy = position.coords.accuracy;
                    
                    document.getElementById('latitude').textContent = latitude.toFixed(6);
                    document.getElementById('longitude').textContent = longitude.toFixed(6);
                    document.getElementById('accuracy').textContent = `${accuracy.toFixed(2)} meters`;
                    
                    document.getElementById('location-data').style.display = 'grid';
                    output.textContent = `Location retrieved successfully!`;
                },
                (error) => {
                    switch(error.code) {
                        case error.PERMISSION_DENIED:
                            output.textContent = 'User denied the request for Geolocation.';
                            break;
                        case error.POSITION_UNAVAILABLE:
                            output.textContent = 'Location information is unavailable.';
                            break;
                        case error.TIMEOUT:
                            output.textContent = 'The request to get user location timed out.';
                            break;
                        case error.UNKNOWN_ERROR:
                            output.textContent = 'An unknown error occurred.';
                            break;
                    }
                }
            );
        });
        
        // Vibration API
        document.getElementById('vibrate-single').addEventListener('click', () => {
            if (!navigator.vibrate) {
                alert('Vibration API not supported in this browser');
                return;
            }
            navigator.vibrate(200);
        });
        
        document.getElementById('vibrate-pattern').addEventListener('click', () => {
            if (!navigator.vibrate) {
                alert('Vibration API not supported in this browser');
                return;
            }
            navigator.vibrate([100, 50, 100, 50, 100]);
        });
        
        document.getElementById('vibrate-stop').addEventListener('click', () => {
            if (!navigator.vibrate) {
                alert('Vibration API not supported in this browser');
                return;
            }
            navigator.vibrate(0);
        });
        
        // Battery API
        document.getElementById('get-battery').addEventListener('click', async () => {
            const output = document.getElementById('battery-output');
            
            if (!navigator.getBattery) {
                output.textContent = 'Battery API not supported in this browser';
                return;
            }
            
            try {
                const battery = await navigator.getBattery();
                
                document.getElementById('battery-level').textContent = `${(battery.level * 100).toFixed(0)}%`;
                document.getElementById('battery-fill').style.width = `${battery.level * 100}%`;
                document.getElementById('battery-fill').textContent = `${(battery.level * 100).toFixed(0)}%`;
                
                document.getElementById('battery-charging').textContent = battery.charging ? 'Yes' : 'No';
                
                if (battery.charging) {
                    document.getElementById('battery-fill').classList.add('charging');
                } else {
                    document.getElementById('battery-fill').classList.remove('charging');
                }
                
                document.getElementById('battery-charging-time').textContent = 
                    battery.chargingTime === Infinity ? 'Fully charged' : `${battery.chargingTime} seconds`;
                
                document.getElementById('battery-discharging-time').textContent = 
                    battery.dischargingTime === Infinity ? 'Unknown' : `${battery.dischargingTime} seconds`;
                
                document.getElementById('battery-data').style.display = 'grid';
                output.textContent = 'Battery information retrieved successfully!';
                
                // Add event listeners for changes
                battery.addEventListener('chargingchange', () => {
                    document.getElementById('battery-charging').textContent = battery.charging ? 'Yes' : 'No';
                    if (battery.charging) {
                        document.getElementById('battery-fill').classList.add('charging');
                    } else {
                        document.getElementById('battery-fill').classList.remove('charging');
                    }
                });
                
                battery.addEventListener('levelchange', () => {
                    document.getElementById('battery-level').textContent = `${(battery.level * 100).toFixed(0)}%`;
                    document.getElementById('battery-fill').style.width = `${battery.level * 100}%`;
                    document.getElementById('battery-fill').textContent = `${(battery.level * 100).toFixed(0)}%`;
                });
                
            } catch (error) {
                output.textContent = `Error getting battery information: ${error.message}`;
            }
        });
        
        // Notifications API
        document.getElementById('request-permission').addEventListener('click', () => {
            const output = document.getElementById('notification-output');
            
            if (!('Notification' in window)) {
                output.textContent = 'This browser does not support notifications';
                return;
            }
            
            Notification.requestPermission().then(permission => {
                output.textContent = `Notification permission: ${permission}`;
            });
        });
        
        document.getElementById('show-notification').addEventListener('click', () => {
            const output = document.getElementById('notification-output');
            
            if (!('Notification' in window)) {
                output.textContent = 'This browser does not support notifications';
                return;
            }
            
            if (Notification.permission !== 'granted') {
                output.textContent = 'Please request notification permission first';
                return;
            }
            
            const notification = new Notification('Web API Demo', {
                body: 'This is a sample notification from the Web APIs demo!',
                icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTYiIHI9IjEiLz48cGF0aCBkPSJNMTIgN2MtLjU1IDAtMSAuNDUtMSAxdjRsNSAzaC00djJoNmwtMy0zVjhjMC0uNTUtLjQ1LTEtMS0xeiIvPjwvc3ZnPg=='
            });
            
            notification.onclick = () => {
                output.textContent = 'Notification was clicked!';
            };
            
            output.textContent = 'Notification sent!';
        });
