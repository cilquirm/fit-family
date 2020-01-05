import Link from "next/link";
import { Button, Grid, Icon } from "semantic-ui-react";

export default () => (
  <Grid centered columns={2}>
    <Grid.Column>
      <Button icon color="green" size="huge" labelPosition="left">
        <Icon name="play circle" />
        <Link href="/join">
          <a>Join a Team</a>
        </Link>
      </Button>
      <Button icon color="purple" size="huge" labelPosition="left">
        <Icon name="plus circle" />
        <Link href="/create">
          <a>Create a Team</a>
        </Link>
      </Button>
    </Grid.Column>
  </Grid>
);
