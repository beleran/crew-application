declare type Person = {
    status: string,
    firstName: string,
    lastName: string,
    avatar: string,
    city: string,
    id: string,
}


declare type Dob = {
    date: string,
    age: number,
}

declare type PersonFilters = {
    name: string,
    city: string,
}

declare type Action = {
    type: string,
    filters: PersonFilters,
    person: Person,
    direction: number,
    crew: Person[],
}

declare module SCSSModule {
    declare var exports: { [key: string]: string };
}
