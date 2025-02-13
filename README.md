# Silent Crash on Unhandled Exception in Async Operation

This example demonstrates a subtle bug in Node.js where an unhandled exception inside an asynchronous operation can cause the server to crash without any clear indication in the console.  The issue occurs because the `throw` statement is not caught by any error handling mechanism, and the exception bubbles up silently, rather than being logged or causing a clear crash report.

## Problem

The provided `bug.js` creates an HTTP server. If you request the `/error` endpoint, an asynchronous operation throws an error.  However, this error is not properly handled, resulting in a silent crash of the server.  The server does not log an error message or provide any clear feedback about the failure. This makes debugging very challenging, especially in production environments.

## Solution

The `bugSolution.js` demonstrates a solution using `process.on('uncaughtException')`.  This event listener will catch the exception, log an error message, and gracefully exit the process.  Always ensure you handle exceptions properly within asynchronous operations to avoid these kinds of issues.  Also consider utilizing a more comprehensive error monitoring system in a production environment.
