FROM python:3-slim
RUN pip install pdm

WORKDIR /project
COPY pyproject.toml pdm.lock /project/
RUN pdm install
ENV PATH="/project/.venv/bin:$PATH"

WORKDIR /project/app
COPY /app .

CMD [ "flask", "run", "--host", "0.0.0.0" ]
