CREATE TABLE public.users
(
    id    integer NOT NULL,
    name  text,
    email text
);

ALTER TABLE public.users
    OWNER TO postgres;

CREATE SEQUENCE public."users_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."users_ID_seq"
    OWNER TO postgres;

ALTER SEQUENCE public."users_ID_seq" OWNED BY public.users.id;

ALTER TABLE ONLY public.users
    ALTER COLUMN id SET DEFAULT nextval('public."users_ID_seq"'::regclass);

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
