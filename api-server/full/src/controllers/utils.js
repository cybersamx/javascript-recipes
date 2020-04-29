import colors from 'colors';

// eslint-disable-next-line import/prefer-default-export
export function log(req, status) {
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
}
