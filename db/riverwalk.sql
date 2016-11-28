-- Database: riverwalk

-- DROP DATABASE riverwalk;

CREATE DATABASE riverwalk
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'en_IN'
       LC_CTYPE = 'en_IN'
       CONNECTION LIMIT = -1;

-- Table: public.auth_level

-- DROP TABLE public.auth_level;

CREATE TABLE public."user"
(
  id SERIAL NOT NULL,
  user_auth_level integer,
  employee_owner integer,
  affiliate_owner integer,
  created_on timestamp without time zone,
  email text,
  first_name text,
  middle_name text,
  last_name text,
  dob timestamp without time zone,
  mobile_phone text,
  home_phone text,
  business_phone text,
  fax_number text,
  ssn text,
  street_address text,
  city_address text,
  state_address text,
  zip_address text,
  account_locked boolean NOT NULL,
  contract boolean NOT NULL,
  CONSTRAINT pk_user_id PRIMARY KEY (id),
  CONSTRAINT uk_user_email UNIQUE (email)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public."user"
  OWNER TO postgres;

-- Table: public.partner

-- DROP TABLE public.partner;

CREATE TABLE public.partner
(
  id integer NOT NULL,
  user_id integer NOT NULL,
  owner integer NOT NULL,
  commission numeric NOT NULL,
  CONSTRAINT pk_partner_id PRIMARY KEY (id),
  CONSTRAINT partner_owner_fkey FOREIGN KEY (owner)
      REFERENCES public."user" (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT partner_user_id_fkey FOREIGN KEY (user_id)
      REFERENCES public."user" (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.partner
  OWNER TO postgres;

-- Table: public.credit_cards

-- DROP TABLE public.credit_cards;

CREATE TABLE public.credit_cards
(
  id integer NOT NULL,
  user_id integer NOT NULL,
  card_name text NOT NULL,
  card_type text NOT NULL,
  card_number text NOT NULL,
  card_exp text NOT NULL,
  card_code text NOT NULL,
  renew_date timestamp without time zone NOT NULL,
  renew_amount numeric NOT NULL,
  card_primary boolean NOT NULL,
  CONSTRAINT pk_credit_cards_id PRIMARY KEY (id),
  CONSTRAINT credit_cards_user_id_fkey FOREIGN KEY (user_id)
      REFERENCES public."user" (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.credit_cards
  OWNER TO postgres;

-- Table: public.contracts

-- DROP TABLE public.contracts;

CREATE TABLE public.contracts
(
  id integer NOT NULL,
  user_id integer NOT NULL,
  path_contract text NOT NULL,
  CONSTRAINT pk_contracts_id PRIMARY KEY (id),
  CONSTRAINT fk_contracts_user_id FOREIGN KEY (user_id)
      REFERENCES public."user" (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.contracts
  OWNER TO postgres;

-- Table: public.messages

-- DROP TABLE public.messages;

CREATE TABLE public.messages
(
  id integer NOT NULL,
  user_from_id integer NOT NULL,
  user_for_id integer NOT NULL,
  message text NOT NULL,
  creation_date timestamp without time zone NOT NULL,
  CONSTRAINT pk_messages_id PRIMARY KEY (id),
  CONSTRAINT fk_messages_user_for_id FOREIGN KEY (user_for_id)
      REFERENCES public."user" (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_messages_user_from_id FOREIGN KEY (user_from_id)
      REFERENCES public."user" (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.messages
  OWNER TO postgres;

-- Table: public.email_templates

-- DROP TABLE public.email_templates;

CREATE TABLE public.email_templates
(
  id integer NOT NULL,
  name text NOT NULL,
  template text NOT NULL,
  CONSTRAINT pk_email_templates_id PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.email_templates
  OWNER TO postgres;

-- Table: public.pdf_templates

-- DROP TABLE public.pdf_templates;

CREATE TABLE public.pdf_templates
(
  id integer NOT NULL,
  name text NOT NULL,
  template text NOT NULL,
  CONSTRAINT pk_pdf_templates_id PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.pdf_templates
  OWNER TO postgres;

-- Table: public.user_document

-- DROP TABLE public.user_document;

CREATE TABLE public.user_document
(
  id integer NOT NULL,
  user_id integer NOT NULL,
  path_document text NOT NULL,
  CONSTRAINT pk_user_document_id PRIMARY KEY (id),
  CONSTRAINT user_document_user_id_fkey FOREIGN KEY (user_id)
      REFERENCES public."user" (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.user_document
  OWNER TO postgres;

-- Table: public.mailing_list

-- DROP TABLE public.mailing_list;

CREATE TABLE public.mailing_list
(
  id integer NOT NULL,
  user_id integer NOT NULL,
  email text NOT NULL,
  permission boolean NOT NULL,
  CONSTRAINT pk_mailing_list_id PRIMARY KEY (id),
  CONSTRAINT mailing_list_user_id_fkey FOREIGN KEY (user_id)
      REFERENCES public."user" (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.mailing_list
  OWNER TO postgres;

-- Table: public.schedule

-- DROP TABLE public.schedule;

CREATE TABLE public.schedule
(
  id integer NOT NULL,
  message text NOT NULL,
  user_from_id integer NOT NULL,
  user_for_id integer NOT NULL,
  email text NOT NULL,
  frequency integer NOT NULL,
  expiration_date timestamp without time zone NOT NULL,
  expire boolean NOT NULL,
  CONSTRAINT pk_schedule_id PRIMARY KEY (id),
  CONSTRAINT fk_schedule_user_for_id FOREIGN KEY (user_for_id)
      REFERENCES public."user" (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT schedule_user_from_id_fkey FOREIGN KEY (user_from_id)
      REFERENCES public."user" (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.schedule
  OWNER TO postgres;