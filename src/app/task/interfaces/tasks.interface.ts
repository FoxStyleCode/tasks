export interface Task {
    current_page:   number;
    data:           Data[];
    first_page_url: string;
    from:           number;
    last_page:      number;
    last_page_url:  string;
    links:          Link[];
    next_page_url:  null;
    path:           string;
    per_page:       number;
    prev_page_url:  null;
    to:             number;
    total:          number;
}

export interface Data{
    id?:        number;
    name:       string;
    status:     string;
    created_at?: Date;
    updated_at?: Date;
}

export interface Data2{
    data: Data,
    msg: string
}

export interface Link {
    url:    null | string;
    label:  string;
    active: boolean;
}
