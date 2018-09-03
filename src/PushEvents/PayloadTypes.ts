export type href = {
    href: string
}

export type Content = {
    raw: string,
    markup: string,
    html: string
};

export type Owner = {
    type: string,
    username: string,
    display_name: string,
    uuid: string,
    links: {
        self: href,
        html: href,
        avatar: href
    }
}

export type Project = {
    type: string,
    name: string,
    uuid: string,
    links: LinkMap,
    key: string
}

export type Issue = {
    id: number,
    component: string,
    title: string,
    content: Content,
    priority: string,
    state: string,
    type: string,
    milestone: { name: string },
    version: { name: string },
    created_on: string,
    updated_on: string,
    links: LinkMap
}

export type Comment = {
    id: number,
    parent: string,
    content: Content,
    inline: {
        to: string,
        from: string,
        path: string,
    },
    created_on: string,
    updated_on: string,
    links: LinkMap
}

export type PullRequest = {
    id: number,
    title: string,
    description: string,
    state: string,
    author: Owner,
    source: {
        branch: { name: string },
        commit: { hash: string },
        repository: Repository
    },
    destination: {
        branch: { name: string },
        commit: { hash: string },
        repository: Repository
    },
    merge_commit: { hash: string },
    participants: Owner[],  // User
    reviewers: Owner[], // User
    close_source_branch?: boolean,
    closed_by?: Owner, // user
    reason?: string,
    created_on: string,
    updated_on: string,
    links: LinkMap & {
        avatar: string
    }
}

export type CommitStatus = {
    name: string,
    description: string,
    state: string,
    key: string,
    url: string,
    type: string,
    created_on: string,
    updated_on: string,
    links: LinkMap
}

export type Repository = {
    type: string,
    name: string,
    full_name: string,
    uuid: string,
    links: LinkMap,
    project; string,
    webiste: string,
    owner: string,
    scm: string,
    is_private: boolean
}

export type LinkMap = {
    self: href,
    html: href
}

export type Link = {
    href: string
}

export type Target = {
    type: string,
    hash: string,
    author: Owner,
    message: string,
    date: string,
    parents: {
        type: string,
        hash: string,
        links: LinkMap
    }[]
}

export type PushState = {
    type: string,
    name: string,
    target: Target,
    links: LinkMap
}

export type Commit = {
    hash: string,
    type: string,
    message: string,
    author: Owner,
    links: LinkMap
}

export type PushObject = {
    new?: PushState,
    old: PushState,
    links: LinkMap,
    created: boolean,
    closed: boolean,
    forced: boolean,
    commits: Commit[]
}
