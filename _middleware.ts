import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest) {
//   console.log('----middleware: ', request)
//   return NextResponse.next()
// }
/*

You're an expert in React and Next JS.
I want to create a component that associate a Topic to a player for a quiz game.

I want you to write a functionnal component that receives as prop a list of players in this format:
{
    "id": "clfk75w8v0006o7mgjxvtyfn9",
    topicNumber: null,
    score: 0,
  }
and also as prop a list of topics in this format:
{
  number: 1,
  name: "topic1",
}

The component should  renders the list of topics names, and for each inline topic, we should have a select box to select to player that has chosen a given topic.
And save that information into the local state of the component.
Plus, when we associate a player to a topic, that player should not be available anymore for selection for the other topics




*/