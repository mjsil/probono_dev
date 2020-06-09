import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, Input, Button } from './styles';

export default function Search() {
    const [search, setSearch] = useState('');

    return (
        <Container>
            <Input onChange={(e) => setSearch(e.target.value)} value={search} />
            <Button>
                <Feather name="search" color="#fff" size={24} />
            </Button>
        </Container>
    );
}
