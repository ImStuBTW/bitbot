export declare type Content = {
    raw: string;
    markup: string;
    html: string;
};
export declare type Owner = {
    type: string;
    username: string;
    display_name: string;
    uuid: string;
    links: string[];
};
export declare type Project = {
    type: string;
    name: string;
    uuid: string;
    links: LinkMap;
    key: string;
};
export declare type Issue = {
    id: number;
    component: string;
    title: string;
    content: Content;
    priority: string;
    state: string;
    type: string;
    milestone: {
        name: string;
    };
    version: {
        name: string;
    };
    created_on: string;
    updated_on: string;
    links: LinkMap;
};
export declare type Comment = {
    id: number;
    parent: string;
    content: Content;
    inline: {
        to: string;
        from: string;
        path: string;
    };
    created_on: string;
    updated_on: string;
    links: LinkMap;
};
export declare type PullRequest = {
    id: number;
    title: string;
    description: string;
    state: string;
    author: Owner;
    source: {
        branch: {
            name: string;
        };
        commit: {
            hash: string;
        };
        repository: Repository;
    };
    merge_commit: {
        hash: string;
    };
    participants: Owner[];
    reviewers: Owner[];
    close_source_branch?: boolean;
    closed_by?: Owner;
    reason?: string;
    created_on: string;
    updated_on: string;
    links: LinkMap;
};
export declare type CommitStatus = {
    name: string;
    description: string;
    state: string;
    key: string;
    url: string;
    type: string;
    created_on: string;
    updated_on: string;
    links: LinkMap;
};
export declare type Repository = {
    type: string;
    name: string;
    full_name: string;
    uuid: string;
    links: LinkMap;
    project: any;
    string: any;
    webiste: string;
    owner: string;
    scm: string;
    is_private: boolean;
};
export declare type LinkMap = {
    [name: string]: Link;
};
export declare type Link = {
    href: string;
};
export declare type Target = {
    type: string;
    hash: string;
    author: Owner;
    message: string;
    date: string;
    parents: {
        type: string;
        hash: string;
        links: LinkMap;
    }[];
};
export declare type PushState = {
    type: string;
    name: string;
    target: Target;
    links: string[];
};
export declare type Commit = {
    hash: string;
    type: string;
    message: string;
    author: Owner;
    links: LinkMap;
};
export declare type PushObject = {
    new?: PushState;
    old: PushState;
    links: string[];
    created: boolean;
    closed: boolean;
    forced: boolean;
    commits: Commit[];
};
