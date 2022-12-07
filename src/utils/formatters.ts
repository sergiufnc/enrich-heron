export const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
}

export const formatDate = (value: string) => {
    const date = new Date(value);
    return date.toLocaleDateString('en-US');
}
