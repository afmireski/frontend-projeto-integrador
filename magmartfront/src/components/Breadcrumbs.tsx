import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function BasicBreadcrumbs({ path }) {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {path.map((i: any, key: number) => {
            if (i?.active) {
                return (<Typography key={key} color="text.primary">{i.name}</Typography>)
            } else {
                return (
                    <Link key={key} underline="hover" color="inherit" href={i.url}>
                        {i.name}
                    </Link>
                )
            }
        })}
      </Breadcrumbs>
    </div>
  );
}