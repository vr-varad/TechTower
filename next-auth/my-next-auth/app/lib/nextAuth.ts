import CredentialProvider from "next-auth/providers/credentials";

export  const NEXT_AUTH = {
    providers: [
      CredentialProvider({
        name: "Email",
        credentials: {
          username: {
            label: "email",
            type: "text",
            placeholder: "Please Enter UserName",
          },
          password: {
            label: "password",
            type: "password",
            placeholder: "Please Enter Password",
          },
        },
        async authorize(credentials: any) {
          const email = credentials.email;
          const password = credentials.password;
          console.log(email, password);
          return {
            id: "1",
            name: "Varad Gupta",
            email: "varadgupta21@gmial.com"
          };
        },
      }),
    ],
    secret: process.env.NEXTAUTH_S,
    callbacks : {
      async jwt({token}: any){
        token.userId = token.sub
        return token
      },
      async session({session, token, user} : any){
        if(session && session.user){
          session.user.id = token.sub
        }
        return session
      }
    }
  }