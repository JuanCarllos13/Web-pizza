import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies, destroyCookie } from "nookies";


// Função para pagina que só users logados podem ter acesso

export function canSSRAuth<P>(fn: GetServerSideProps<P)
