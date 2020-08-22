--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4
-- Dumped by pg_dump version 12.4

-- Started on 2020-08-22 21:10:32

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2831 (class 1262 OID 16393)
-- Name: cvdesignr; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE cvdesignr WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'French_France.1252' LC_CTYPE = 'French_France.1252';


\connect cvdesignr

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2825 (class 0 OID 16402)
-- Dependencies: 204
-- Data for Name: offers; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.offers (id, job_title, company_name, description, salary, created_at, contract_type, company_location) VALUES (1, 'Développeur', 'ENGIE', 'Une description', 1658.36, '2020-08-16 00:00:00+02', 'CDI', 'France');
INSERT INTO public.offers (id, job_title, company_name, description, salary, created_at, contract_type, company_location) VALUES (2, 'Commercial', 'CV Designr', 'Nous recherchons des vendeurs et vendeuses motivés avec une réelle soif de vendre et augmenter leurs revenus. Compétiteurs et compétitrices motivés par la performance et le dépassement de soi, le tout dans une ambiance de travail dynamique.Vous rejoignez l’équipe commerciale sur notre plateau, au siège de la société. Aucun déplacement chez le client n’est à prévoir. La prospection la vente et le suivi se font uniquement par téléphone. Une liste de prospect vous sera remise , vous devrez donc les contacter, afin de développer votre porte-feuille de client.', 6253.87, '2020-07-25 00:00:00+02', 'CDI', 'France, Paris');
INSERT INTO public.offers (id, job_title, company_name, description, salary, created_at, contract_type, company_location) VALUES (3, 'IT Manager Apprentissage', 'TS Global', 'Utilisation de tous les outils à disposition pour générer des rendez-vous : social selling, LinkedIn, phoning, prescription, salons, réseaux...', 2500, '2020-08-10 00:00:00+02', 'Apprentissage', 'France, Ruel-Malmaison(92)');
INSERT INTO public.offers (id, job_title, company_name, description, salary, created_at, contract_type, company_location) VALUES (4, 'Business Développeur', 'Umob', 'Vos missions ? - Développer de nouveaux leads. - Présenter et chiffrer nos solutions innovantes.- Suivre les clients existants, les fidéliser. Réévaluer leurs besoins, faire des propositions de changements et présenter les évolutions.Interlocuteur référent du client, vous identifiez ses besoins, apportez les solutions appropriées, et gérer la relation commerciale.', 3658, '2020-08-21 00:00:00+02', 'CDI', 'France');


--
-- TOC entry 2823 (class 0 OID 16394)
-- Dependencies: 202
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users (id, email, password, token) OVERRIDING SYSTEM VALUE VALUES (1, 'jacky.lim@edu.itescia.fr', '$2b$10$0.s5zLLEl.OfPc9aXnS3HOEeiqlRKWPcxPBO7JgLntxc76DKTLJMi', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY2t5LmxpbUBlZHUuaXRlc2NpYS5mciIsInBhc3N3b3JkIjoiJDJiJDEwJDAuczV6TExFbC5PZlBjOWFYblMzSE9FZWlxbFJLV1BjeFBCTzdKZ0xudHhjNzZES1RMSk1pIiwiaWF0IjoxNTk4MTA1OTM0LCJleHAiOjE1OTgxOTIzMzR9.M3ChK2yNAGiRJR0lPyCGLYNJdlA8Fn0TYT1pV0p3U98');
INSERT INTO public.users (id, email, password, token) OVERRIDING SYSTEM VALUE VALUES (2, 'test@gmail.com', '$2b$10$Jny.arRMR7wDzYuk9CsJGeHH6uuIBIy.PwGotRNrAArhIO2KTK5Cu', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkSm55LmFyUk1SN3dEell1azlDc0pHZUhINnV1SUJJeS5Qd0dvdFJOckFBcmhJTzJLVEs1Q3UiLCJpYXQiOjE1OTgxMDYxMzcsImV4cCI6MTU5ODE5MjUzN30.n6ea4xupl_xTpVysOp7d7zId0QsoOzHqzYFfDszeZX0');
INSERT INTO public.users (id, email, password, token) OVERRIDING SYSTEM VALUE VALUES (3, 'jean@gmail.com', '$2b$10$KpchcvcdwoY7wBPrlnm42eXOh8cwOD.LQYNxtld9T548oloY.pRT2', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplYW5AZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkS3BjaGN2Y2R3b1k3d0JQcmxubTQyZVhPaDhjd09ELkxRWU54dGxkOVQ1NDhvbG9ZLnBSVDIiLCJpYXQiOjE1OTgxMDYzNjQsImV4cCI6MTU5ODE5Mjc2NH0.xlIkUx_sg-aAZfLBsD7_SiepwXv_DZLWki1VE0zSlAI');
INSERT INTO public.users (id, email, password, token) OVERRIDING SYSTEM VALUE VALUES (4, 'jo@gmail.com', '$2b$10$HfPWYiUW8kpOCF.QDlIfdeB5iA1lEw.smy3gdpVJ0wa6laIzDiuFu', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEhmUFdZaVVXOGtwT0NGLlFEbElmZGVCNWlBMWxFdy5zbXkzZ2RwVkowd2E2bGFJekRpdUZ1IiwiaWF0IjoxNTk4MTA2NDMwLCJleHAiOjE1OTgxOTI4MzB9.sHFQuXHM139fbKybTlOG-k_6imumYyJPQSrrieJWkJs');


--
-- TOC entry 2832 (class 0 OID 0)
-- Dependencies: 203
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


-- Completed on 2020-08-22 21:10:32

--
-- PostgreSQL database dump complete
--

