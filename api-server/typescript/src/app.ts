import express from 'express';
import colors from 'colors';

const startedAt = new Date();
const app = express();

const log = (req, status) => {
    const now = new Date();
    const color = status >= 200 && status < 300 ? colors.green : colors.red;
    console.log(
        colors.gray(now.toISOString()),
        'Request',
        colors.blue('method=') + req.method,
        colors.blue('path=') + req.path,
        colors.blue('status=') + color(status),
        colors.blue('user-agent=') + req.header('user-agent'),
    );
};

app.get('/', (req, res) => {
    const status = 200;
    log(req, status);
    res.status(status).json({
        health: 'ok',
        info: `uptime: ${startedAt.toISOString()}`,
    });
});

export default app;
