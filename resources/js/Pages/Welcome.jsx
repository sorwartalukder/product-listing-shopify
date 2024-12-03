import { Link, Head, useForm } from '@inertiajs/react';
import { AppProvider, Button, Card, Form, FormLayout, Page, TextField } from '@shopify/polaris';
import { useCallback, useState } from 'react';
import '@shopify/polaris/build/esm/styles.css';

export default function Welcome(props) {
    console.log(props)
    const {
        data,
        setData,
        post,
        reset
    } = useForm({
        title: undefined,
        description: undefined,
        price: undefined,
        type: undefined
    });


    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('products'), {
            preserveScroll: true,
            onSuccess: () => {
                reset()
            },
        });
    };

    return (
        <>
            <Head title="Welcome" />
            <AppProvider>
                <Card background='red' sectioned>
                    <Page title="Create Product">
                        <Form onSubmit={handleSubmit}>
                            <FormLayout>
                                <TextField label="Title" value={data?.title ?? ""} onChange={(newValue) => { setData('title', newValue) }} />
                                <TextField
                                    label="Description"
                                    value={data?.description ?? ""}
                                    onChange={(newValue) => { setData('description', newValue) }}
                                    multiline
                                />
                                <TextField type="number" label="Price" value={data?.price ?? ""} onChange={(newValue) => { setData('price', newValue) }} />
                                <TextField label="Product Type" value={data?.type ?? ""} onChange={(newValue) => { setData('type', newValue) }} />
                                <Button submit primary>
                                    Submit
                                </Button>
                            </FormLayout>
                        </Form>
                    </Page>
                </Card>
            </AppProvider>
        </>
    );
}
