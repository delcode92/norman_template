import { useEffect, useState } from 'react';

export default function ActiveProjects() {
  const [messages, setMessages] = useState([]);
  const [dataTable, setDataTable] = useState([{
    id: '', 
    log_time: '', 
    no_perkara: '', 
    namaAsisten: 'John', 
    log_text: '', 
    status: 'Active'
  }]);

  // useEffect(() => {
  //   let eventSource;
    
  //   const connectSSE = () => {
  //     console.log('Connecting to SSE...');
  //     eventSource = new EventSource('http://localhost:8082/get_active_logs');

  //     eventSource.onopen = () => {
  //       console.log('SSE Connection opened');
  //     };

  //     eventSource.onmessage = (event) => {
  //       try {
  //         const rawData = event.data;
  //         console.log('Raw data received:', rawData);
          
  //         const data = JSON.parse(rawData);
  //         console.log('Parsed data:', data);

  //         // Check if data is an array
  //         if (Array.isArray(data)) {
  //           setDataTable(data);
  //           console.log("p1:", data);
  //       } else if (typeof data === 'object') {
  //           // If single object, wrap in array
  //           setDataTable([data]);
  //           console.log("p2:", data);
            
  //         } else {
  //           console.warn('Unexpected data format:', data);
  //         }
  //       } catch (error) {
  //         console.error('Error processing SSE data:', error);
  //         console.log('Problematic data:', event.data);
  //       }
  //     };

  //     eventSource.onerror = (error) => {
  //       console.error('SSE connection error:', error);
  //       eventSource.close();
  //       // Attempt to reconnect after 5 seconds
  //       setTimeout(connectSSE, 5000);
  //     };
  //   };

  //   // Initial connection
  //   connectSSE();

  //   // Cleanup on component unmount
  //   return () => {
  //     if (eventSource) {
  //       console.log('Closing SSE connection');
  //       eventSource.close();
  //     }
  //   };
  // }, []);

  useEffect(() => {
    // const eventSource = new EventSource('http://localhost:8082/get_active_logs');
    const eventSource = new EventSource('http://localhost:8082/get_active_logs', {
      withCredentials: true
    });

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // setMessages((prev) => [...prev, `${data.timestamp}: ${data.message}`]);
      console.log(data);
      setDataTable(data)

    };

    eventSource.onerror = (error) => {
      console.error('SSE error:', error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Server Sent Events Demo isnide Dashboard</h1>
      <div className="border rounded p-4">
        <h2 className="text-xl mb-2">Messages:</h2>
        <ul className="space-y-2">
          {dataTable.map((item, index) => (
            <li key={index} className="text-gray-700">
              {/* Display specific fields from the object */}
              ID: {item.id}, No Perkara: {item.no_perkara}, Log Text: {item.log_text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}